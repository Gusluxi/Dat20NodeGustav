import express from "express";
const app = express();

app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    //console.log("A client connected", socket.id);

    socket.on("color change happened woa", ({ data }) => {
        console.log("Color: ",data);

        //changes colors for other sockets
        //socket.broadcast.emit("please change the color", { data });

        //changes colors for this socket
        //socket.emit("please change the color", { data });

        //changes colors for all sockets
        io.emit("please change the color", { data });
    })
});




import path from "path";

app.get("/colors", (req, res) => {
    res.sendFile(path.resolve("./public/colors.html"));
})

server.listen(3000);