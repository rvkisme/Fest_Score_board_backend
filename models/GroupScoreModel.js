const mongoose = require("mongoose");

const GroupSchema= new mongoose.Schema({
        team: {
            type: String,
            required: true
        },
        score:{
            type: Number,
            required: true,
            default: 0
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
})

const GroupScore = mongoose.model("GroupScore", GroupSchema);
module.exports = GroupScore;