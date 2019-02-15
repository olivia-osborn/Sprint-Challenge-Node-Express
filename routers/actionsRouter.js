const express = require("express");
const router = express.Router();

const Actions = require("../data/helpers/actionModel");

router.get("/", async (req, res) => {
    try {
        const actions = await Actions.get()
        res.status(200).json(actions)
    } catch (error) {
        res.status(500).json({message: "there was an error fetching your data!"})
    }
});

router.get("/:id", async (req, res) => {
    try {
        const action = await Actions.get(req.params.id)
        if (action) {
            res.status(200).json(action)
        } else {
            res.status(404).json({message: "Could not find action with that id"})
        }
    } catch (error) {
        res.status(500).json({message: "Could not fetch action"})
    }
})

router.post("/", async (req, res) => {
    newAction = req.body
    if (!newAction.project_id || !newAction.description || !newAction.notes) {
        res.status(400).json({message: "Please enter a project id, description, and notes!"})
    } else {
        try {
            const action = await Actions.insert(newAction)
            res.status(201).json({action})
        } catch (error) {
            res.status(500).json({message: "there was an error adding your action"})
        }
    }
})

module.exports = router;