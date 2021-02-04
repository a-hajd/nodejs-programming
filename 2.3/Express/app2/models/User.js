const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Although you can simply assign properties to a type such as 'name: string',
  // to assign extra values to a property of the schema it needs to correspond to a JSO, as below.
  name: {
    type: String,
    required: true,
  },
  age: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
