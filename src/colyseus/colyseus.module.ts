import { Module, OnModuleInit } from '@nestjs/common';
import { Server } from 'colyseus';
import { createServer } from 'http';
import { MyRoom } from './my-room';

@Module({})
export class ColyseusModule implements OnModuleInit {
    private gameServer: Server;

    onModuleInit() {
        const port = Number(process.env.COLYSEUS_PORT || 2567);
        const httpServer = createServer();
        this.gameServer = new Server({
            server: httpServer,
        });


        this.gameServer.define('my_room', MyRoom);

        httpServer.listen(port, () => {
            console.log(`Colyseus server is listening on ws://localhost:${port}`);
        });
    }
} 
