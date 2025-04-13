// src/sockets/socket.js
import { io } from "socket.io-client";

const token = localStorage.getItem("adminToken");

const socket = io("http://localhost:3000", {
  auth: {
    token,
  },
  autoConnect: false, // Optional: connect manually later if needed
});

export default socket;
