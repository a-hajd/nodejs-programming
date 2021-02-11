const mongoose = require("mongoose");
const courseSchema = require("./Course").schema;

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  courses: [courseSchema],
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
