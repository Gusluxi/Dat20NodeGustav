const express = require("express");
const app = express();
const fetch = require("node-fetch")
app.use(express.static("public"));


const { calculateAmountOfCoolDinosaurs } = require("./dinosaurs/dinosaurs.js");
console.log("number of dinosaurs:", calculateAmountOfCoolDinosaurs());

const dinosaurrouter = require("./routers/dinosaurrouter.js");
app.use(dinosaurrouter.router)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
})

app.get("/proxy", (req, res) => {
    fetch('https://google.com')
        .then(response => response.text())
        .then(text => {
            res.send(text);
        });

});

app.get("/welcome", (req, res) => {
    res.send("<h1>Welcome to my website</h1><h2>Take a look</h2>");
});

app.get("/bored", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html");
});

const PORT = Number(process.env.PORT) || 9000;

const server = app.listen(PORT, () => {
    console.log("server is running", server.address().port);
});

