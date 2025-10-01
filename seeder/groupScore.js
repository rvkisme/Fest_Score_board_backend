// seeder/seedGroupScores.js
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("../db/connect");
const GroupScore = require("../models/GroupScoreModel");

const scores = [
  { team: "QUBA",  score: 120 },
  { team: "THAIBA",  score: 200 },
  { team: "MINA",  score: 150 },
];

async function seedData() {
  try {
    await connectDB();

    // Clear existing data if needed
    await GroupScore.deleteMany({});
    console.log("🧹 Cleared old scores");

    // Insert new data
    await GroupScore.insertMany(scores);
    console.log("✅ Sample scores inserted");

    process.exit(); // end the script
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
}

seedData();
