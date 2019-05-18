const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  date: { type: Number, required: true }
});

module.exports = mongoose.model("User", UserSchema);
