import { io } from 'socket.io-client';

const socketUrl = import.meta.env.VITE_SOCKET_URL || '/events';
export const socket = io(socketUrl, { transports: ['websocket'] });

socket.on('connect', () => {
  console.log('Connected to events:', socket.id);
});