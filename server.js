const express = require("express");
const helmet = require("helmet");
const cors = require("cors")
const server = express();

const projectsRouter = require("./routers/projectsRouter");
const actionsRouter = require("./routers/actionsRouter");

// middleware:
server.use(express.json())
server.use(cors())
server.use(helmet());
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);
server.use(errorHandler)

function errorHandler(error, req, res, next) {
    res.status(400).json({message: "something went wrong!", error})
}
module.exports = server;