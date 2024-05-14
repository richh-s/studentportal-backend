const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  id: String,
  courseid: String,
  courseName: String,
  year: Number,
});

module.exports = mongoose.model("course", newSchema);
