const express = require("express");
const fs = require("fs");
const app = express();
const PORT = Number(process.env.PORT) || 9000;

app.use(express.static("public"));

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const header = fs.readFileSync("./public/components/header/header.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const terminalCommands = fs.readFileSync("./public/pages/commands/commands.html").toString();
const codeSnippets = fs.readFileSync("./public/pages/code/code.html").toString();
const tools = fs.readFileSync("./public/pages/tools/tools.html").toString();
const theories = fs.readFileSync("./public/pages/theories/theories.html").toString();


const frontpageDoc = 
header.replace("%%CSS_PATH_PH%%", "/pages/frontpage/frontpage.css").replace("%%TITLE_PH%%", "Documentation") + nav + frontpage + 
footer.replace("%%JS_PATH_PH%%", "/pages/frontpage/frontpage.js");

const terminalCommandsDoc =
header.replace("%%CSS_PATH_PH%%", "/pages/commands/commands.css")
    .replace("%%TITLE_PH%%", "Terminal Commands") + nav + terminalCommands + 
footer.replace("%%JS_PATH_PH%%", "/pages/commands/commands.js");

const codeSnippetsDoc =
header.replace("%%CSS_PATH_PH%%", "/pages/code/code.css")
    .replace("%%TITLE_PH%%", "Code Snippets") + nav + codeSnippets + 
footer.replace("%%JS_PATH_PH%%", "/pages/code/code.js");

const toolsDoc =
header.replace("%%CSS_PATH_PH%%", "/pages/tools/tools.css")
    .replace("%%TITLE_PH%%", "Tools") + nav + tools + 
footer.replace("%%JS_PATH_PH%%", "/pages/tools/tools.js");

const theoriesDoc =
header.replace("%%CSS_PATH_PH%%", "/pages/theories/theories.css")
    .replace("%%TITLE_PH%%", "Theories") + nav + theories + 
footer.replace("%%JS_PATH_PH%%", "/pages/theories/theories.js");



app.get("/", (req, res) => {
    res.send(frontpageDoc)
});

app.get("/commands", (req, res) => {
    res.send(terminalCommandsDoc)
});

app.get("/code", (req, res) => {
    res.send(codeSnippetsDoc)
});

app.get("/tools", (req, res) => {
    res.send(toolsDoc)
});

app.get("/theories", (req, res) => {
    res.send(theoriesDoc)
});

const server = app.listen(PORT, () => {
    console.log("server is running", server.address().port);
});