const mongoose = require("mongoose");

// Sub-schema for scores
const scoreSchema = new mongoose.Schema(
    {
        f: { type: String }, // First
        s: { type: String }, // Second
        t: { type: String }, // Third
    },
    { _id: false } 

// Sub-schema for programs
const programSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        score: { type: scoreSchema, required: true },
    },
    { _id: false }
);

// schema included all
const MainSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ["sub_junior", "senior", "super_senior", "general"],
    },
    programs: {
        type: [programSchema], // array of programs
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Program", MainSchema   );
