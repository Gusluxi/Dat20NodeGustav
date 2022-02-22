const express = require("express");
const app = express();
app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();

const frontpage= fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

const frontpagePage = nav + frontpage;

app.get("/", (req, res) => {
    res.send(frontpagePage);
})

app.get("/themepark", (req, res) => {
    res.sendFile(__dirname + "/public/pages/themepark/themepark.html")
})

app.listen(8080, () => {
    console.log("Server is running", 8080);
});