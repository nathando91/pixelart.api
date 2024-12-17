import { Room, Client } from 'colyseus';
import { Schema, type } from '@colyseus/schema';
import * as jwt from 'jsonwebtoken';
import Quadtree from 'simple-quadtree';

class Player extends Schema {
    @type("number") x: number;
    @type("number") y: number;
}

class MyRoomState extends Schema {
    @type({ map: Player }) players = new Map<string, Player>();
}
export class MyRoom extends Room<MyRoomState> {
    private quadtree: any;
    private userSessionMap: { [username: string]: string } = {};

    onCreate(options: any) {
        this.setState(new MyRoomState());

        // Initialize the quadtree with the map size
        this.quadtree = Quadtree(0, 0, 2000, 2000);

        this.onMessage("move", (client, data) => {
            console.log("Move message from", client.sessionId, ":", data);
            // Update player position in the quadtree
            this.quadtree.remove({ id: client.sessionId });
            this.quadtree.put({ x: data.x, y: data.y, id: client.sessionId });

            // Find nearby players within a 100-unit radius
            // const nearbyPlayers = this.findNearbyPlayers(data.x, data.y, 100);

            this.broadcast("move", data, { except: client });

            // console.log("Nearby players:", nearbyPlayers);

            // // Broadcast the move message only to nearby players
            // nearbyPlayers.forEach((player: any) => {
            //     if (player.id !== client.sessionId) {
            //         this.clients.find(c => c.sessionId === player.id)?.send("move", data);
            //     }
            // });
        });

        this.onMessage("chat", (client, message) => {
            console.log("Chat message from", client.sessionId, ":", message);
            // Xử lý logic cho tin nhắn chat
        });

        this.onMessage("update_status", (client, message) => {
            console.log("Update status message from", client.sessionId, ":", message);
            // Xử lý logic cho tin nhắn cập nhật trạng thái
        });

    }

    onJoin(client: Client, options: any) {
        // this.state.players[client.sessionId] = { x: 0, y: 0 };

        // Add player to the quadtree with initial position
        this.quadtree.put({ x: 0, y: 0, id: client.sessionId });

        const token = options.token;
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS_TOKEN) as any;
            console.log(client.sessionId, "joined ", decoded.username);

            // Check if the token is expired
            // const currentTime = Math.floor(Date.now() / 1000);
            // if (decoded.exp < currentTime) {
            //     console.log("Token expired for client", client.sessionId);
            //     client.send("logout", { reason: "Token expired" });
            //     client.leave();
            //     return;
            // }

            // // Thêm username vào userSessionMap
            // const username = decoded.username; // Giả sử token có chứa username
            // this.userSessionMap[username] = client.sessionId;

        } catch (err) {
            console.log("Invalid token for client", client.sessionId);
            client.leave(); // Đuổi client ra khỏi phòng nếu token không hợp lệ
        }
    }

    onLeave(client: Client, consented: boolean) {

        // Remove player from the quadtree
        this.quadtree.remove({ id: client.sessionId });
        console.log(client.sessionId, "left!");

        // Xóa username khỏi userSessionMap
        for (const username in this.userSessionMap) {
            if (this.userSessionMap[username] === client.sessionId) {
                delete this.userSessionMap[username];
                break;
            }
        }
    }

    // Add a method to find nearby players
    findNearbyPlayers(x: number, y: number, range: number) {
        return this.quadtree.get({ x, y, width: range, height: range });
    }

} 