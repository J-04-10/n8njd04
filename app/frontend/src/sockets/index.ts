import { io } from 'socket.io-client';

const socketUrl = import.meta.env.VITE_SOCKET_URL || 'http://localhost:8080/events';
export const socket = io(socketUrl, { transports: ['websocket'] });

socket.on('connect', () => {
  console.log('Connected to events:', socket.id);
});