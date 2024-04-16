const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/social-network",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;
