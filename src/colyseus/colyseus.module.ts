import { Module, OnModuleInit } from '@nestjs/common';
import { Server } from 'colyseus';
import { createServer } from 'http';
import { MyRoom } from './my-room';
@Module({})
export class ColyseusModule implements OnModuleInit {
    private gameServer: Server;

    onModuleInit() {
        this.gameServer = new Server();

        this.gameServer.define('my_room', MyRoom);


        const port = Number(process.env.COLYSEUS_PORT || 2567);
        this.gameServer.listen(port);
        console.log(`Colyseus server listening on ws://localhost:${port}`);
        this.gameServer.simulateLatency(10000);

    }
} 
