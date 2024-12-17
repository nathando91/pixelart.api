import { Room, Client } from 'colyseus';

export class MyRoom extends Room {

    onInit(options: any) {

        console.log('onInit', options);
    }
} 