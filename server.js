const express = require("express");
const helmet = require("helmet");
const server = express();

const projectsRouter = require("./routers/projectsRouter");
const actionsRouter = require("./routers/actionsRouter");

// middleware:
server.use(express.json())
server.use(helmet());
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", async (req, res) => {
    res.send(`<h1>Testing!</h1>`);
})

module.exports = server;