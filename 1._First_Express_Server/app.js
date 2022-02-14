const { response } = require("express");
const express = require("express");
const app = express();

// const app = require("express")(); 
// This also works - Actually it dosn't on the next line.

app.use(express.json());

app.get("/", (req, res) => {
    res.send({});
});

app.get("/welcome", (req, res) => {
    res.send({"Welcome": "Client"})
})

app.post("/mirror", (req, res) => {
    res.send(req.body);
})

app.listen(8080);