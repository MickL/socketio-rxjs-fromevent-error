import { io } from "socket.io-client";
import { fromEvent } from 'rxjs';

const socket      = io('localhost:3000');
const connect$    = fromEvent<void>(socket, 'connect');
const disconnect$ = fromEvent<void>(socket, 'disconnect');

connect$.subscribe(() => {
    console.log('connected');
});

disconnect$.subscribe(() => {
    console.log('disconnected');
});
