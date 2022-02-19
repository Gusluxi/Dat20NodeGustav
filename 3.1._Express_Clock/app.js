const express = require("express");
const app = express();

app.get("/clock", (req, res) => {
    res.sendFile(__dirname + "/public/clock.html")
})


app.listen(8080, () => {
    console.log("Site is running", 8080)
})
       