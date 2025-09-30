const GroupScore = require("../models/GroupScoreModel");

module.exports = {
    getAllScores: async () => {
        try {
            const scores = await GroupScore.find({});
            return scores;
        } catch (error) {
            console.error("Error fetching scores:", error);
            throw error;
        }
    },
    addScore: async (team, category, score) => {
        try {
            const newScore = new GroupScore({ team, category, score });
            await newScore.save();
            return newScore;
        } catch (error) {
            console.error("Error adding score:", error);
            throw error;
        }
    }
}