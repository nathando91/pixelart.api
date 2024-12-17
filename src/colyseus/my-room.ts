import { Room, Client } from 'colyseus';

export class MyRoom extends Room {
    // Phương thức được gọi khi phòng được tạo
    onCreate(options: any) {
        console.log("MyRoom created!", options);

        // Đăng ký một loại tin nhắn
        this.onMessage("message_type", (client, message) => {
            console.log("Received message from", client.sessionId, ":", message);
            // Xử lý tin nhắn
        });
    }

    // Phương thức được gọi khi một client tham gia phòng
    onJoin(client: Client, options: any) {
        console.log(client.sessionId, "joined!");
        // Xử lý khi client tham gia
    }

    // Phương thức được gọi khi một client rời khỏi phòng
    onLeave(client: Client, consented: boolean) {
        console.log(client.sessionId, "left!");
        // Xử lý khi client rời khỏi
    }

    // Phương thức được gọi mỗi
} 