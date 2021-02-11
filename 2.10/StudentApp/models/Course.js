const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = { model: Course, schema: courseSchema };
