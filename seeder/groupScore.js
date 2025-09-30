const helper = require("../helpers/userHelpers");
const connectDb = require("../db/connect");

async function addMultipleScores() {
  try {
    // 1️⃣ Connect to MongoDB first
    await connectDb();
    console.log("MongoDB connected ✅");

    // 2️⃣ Array of scores to insert
    const scores = [
      { team: "QUBA", category: "sub_junior", score: 10 },
      { team: "THAIBA", category: "sub_junior", score: 15 },
      { team: "MINA", category: "sub_junior", score: 20 },
    ];

    // 3️⃣ Insert each score sequentially
    for (let i = 0; i < scores.length; i++) {
      const { team, category, score } = scores[i];
      const result = await helper.addScore(team, category, score);
      console.log(`Inserted:`, result);
    }

    console.log("All scores inserted ✅");
    process.exit(0); // exit script when done
  } catch (err) {
    console.error("Error inserting scores:", err);
    process.exit(1); // exit with error
  }
}

// Run the function
addMultipleScores();
