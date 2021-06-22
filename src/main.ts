import { io } from "socket.io-client";
import { fromEvent } from 'rxjs';

const socket        = io('http://localhost:3000');
const connect$      = fromEvent<void>(socket, 'connect');
const disconnect$   = fromEvent<void>(socket, 'disconnect');
const connectError$ = fromEvent<void>(socket, 'connect_error');

connect$.subscribe(() => {
    console.log('connected');
});

disconnect$.subscribe(() => {
    console.log('disconnected');
});

connectError$.subscribe(err => {
    console.log(err);
});
