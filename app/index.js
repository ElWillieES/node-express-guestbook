const http = require("http");
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const requestId = require("express-request-id")();
const compression = require('compression');
const cors = require('cors');


const port = 3000;

const app = express();
app.disable("x-powered-by");

var entries = [];
app.locals.entries = entries;

app.use(
    cors({
      origin: ['http://localhost', 'http://localhost:3000'],
      methods: ['GET', 'PUT', 'POST', 'DELETE'],
      allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
    })
);
 
app.use(compression());
app.use(requestId);
app.use(logger("short"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/new-entry", (req, res) => {
    res.render("new-entry");
});

app.post("/new-entry", (req, res) => {
    if (!req.body.title || !req.body.body) {
        res.status(400).send("Entries must have a title and a body.");
        return;
    }
    entries.push({
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    });
    res.redirect("/");
});

app.use((req, res, next) => {
    res.status(404).render("404");
});


const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});