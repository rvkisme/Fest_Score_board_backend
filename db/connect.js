// connect.js
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/festScoreBoard';

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

async function connectDB() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log('✅ MongoDB connected successfully');

    // Optional: Ping the database to confirm connection
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log('Ping successful ✅');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Stop server if DB connection fails
  }
}

module.exports = connectDB;
