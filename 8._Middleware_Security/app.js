import express from "express";
import fs from "fs";
import { nextTick } from "process";
import helmet from "helmet";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(helmet());

//###### Rate Limiter ######## START
import rateLimit from 'express-rate-limit'

const baseLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

const authLimiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(baseLimiter)
app.use("/auth", authLimiter);

app.get("/auth/login", (req, res) => {
    res.send({ message: "You are trying to log in..."})
})
//###### Rate Limiter ######## END

//###### Sessions ######## START
import session from "express-session";

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));


  import planetsRouter from "./routers/planets.js";
  app.use(planetsRouter);
//###### Sessions ######## END


//###### BCrypt ######## START
//nvm
//###### BCrypt ######## END

const clothes = fs.readFileSync("./public/clothes.html").toString();

app.use("/auth/*", ipLogger);

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
};

app.get("/frontgate", ipLogger, (req, res) => {
    res.send({})
})

let isHatchOpen = true;
function allowEscape(req, res, next) {
    if (isHatchOpen) {
        console.log("Go on")
        req.escape = "Jimmy";
        next();
    } else {
        res.send({ message: "You are not allowed to pass" })
    }   
}

app.get("/escapehatch", allowEscape, (req, res) => {
    res.send({ message: `Congrats ${req.escape}, you have managed to escape!` })
})

app.get("/room", (req, res, next) => {
    console.log("You are in room 1")
    next();
})

app.get("/room", (req, res) => {
    return res.send({ data: "You are in room 2" })
    res.send({ data: "You are in room 2" });
})

//Wildcard route:
/*
app.get("*", (req, res) => {
    res.send("<h1>Not found 404</h1>")
})
*/

/*
app.get("/clothes", (req, res) => {
    res.send(clothes);
})

app.get("/clothes", (res, req) => {
    res.sendFile(__dirname + "/public/clothes.html")
})
*/

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
});