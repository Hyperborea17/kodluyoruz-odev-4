import { io } from "socket.io-client";
let socket;
export const initSocket = () => {
    socket = io("http://localhost:3000", {
        transports: ["websocket"],
    });

    console.log("Connecting...");
    socket.on("connect", () => console.log("Connected"));
};

export const disconnectSocket = () => {
    console.log("disconnecting...");
    if (socket) socket.disconnect();
};

export const sendcolor = (color) => {
    if (socket) socket.emit("current-color", color);
};

export const receiveColor = (cb) => {
    if (!socket) return true;
    socket.on("receive-color", (color) => {
        console.log("backend: ", color);
        cb(color);
    });
};