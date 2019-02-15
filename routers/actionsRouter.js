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

module.exports = router;