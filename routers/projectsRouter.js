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

router.get("/:id", async (req, res) => {
    try {
        const project = await Projects.get(req.params.id)
        if (project) {
            res.status(200).json(project)
        } else {
            res.status(404).json({message: "Could not find project with that id"})
        }
    } catch (error) {
        res.status(500).json({message: "Could not fetch project"})
    }
})

router.post("/", async (req, res) => {
    newProject = req.body
    if (!newProject.name || !newProject.description) {
        res.status(400).json({message: "Please enter both a name and a description!"})
    } else {
        try {
            const project = await Projects.insert(newProject)
            res.status(201).json({project})
        } catch (error) {
            res.status(500).json({message: "there was an error adding your project"})
        }
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const project = await Projects.remove(req.params.id)
        if (project) {
            res.status(200).json({ message: "project has been removed!"})
        } else {
            res.status(404).json({ message: "Could not find project with that id"})
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting the project"})
    }
})

router.put("/:id", async (req, res) => {
    const newProject = req.body
    if (!newProject.name || !newProject.description) {
        res.status(400).json({message: "Please enter both a name and a description!"})
    } else {
        try {
            const project = await Projects.update(req.params.id, newProject)
            if (project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({ message: "Could not find project with that id"})
            }
        } catch (error) {
            res.status(500).json({ message: "Error updating the project"})
        }
    }
})

module.exports = router;