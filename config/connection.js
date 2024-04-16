const mongoose = require("mongoose");
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Log MongoDB URI
console.log('MongoDB URI:', process.env.MONGODB_URI);

// Event listeners to handle connection status
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully!');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;
