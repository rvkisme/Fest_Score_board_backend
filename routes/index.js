const express = require("express");
const router = express.Router();
const userHelpers = require("../helpers/userHelpers");
/* GET home page. */
router.get("/getScore", async function (req, res, next) {
    try {
        const scores = await userHelpers.getAllScores();
        res.json(scores);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
