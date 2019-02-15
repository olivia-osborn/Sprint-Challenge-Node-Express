const express = require("express");
const router = express.Router();

const Projects = require("../data/helpers/projectModel");

router.get("/", async (req, res) => {
    try {
        const projects = await Projects.get()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({message: "there was an error fetching your data!"})
    }
});

module.exports = router;