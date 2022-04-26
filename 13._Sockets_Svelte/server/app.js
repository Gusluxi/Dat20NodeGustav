import express from "express";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import session from "express-session";
import "dotenv/config";
import userRegistrationRouter from "./routers/userregistration.js";

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const io = new Server(server);
const sessionMiddleware = (session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next)

io.use(wrap(sessionMiddleware))

app.use(express.urlencoded({ extended: true }))
app.use(sessionMiddleware);
app.use(express.static("public"));
app.use(express.static(path.resolve("../client/public/")));
app.use(userRegistrationRouter);


io.on("connection", (socket) => {

    socket.on("colorChanged", (data) => {
        const username = socket.request.session.username;
        data.username = username;
        io.emit("changeTheColor", data)
    })

});




server.listen(PORT, () => {
    console.log("Server is now running on port", PORT);
});