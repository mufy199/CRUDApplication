const mongoose = require("mongoose");
const contactsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      require: [true, "Please add the email address"],
    },
    phone: {
      type: String,
      require: [true, "Please add the phone number"],
    },
    instagram: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model('Contact', contactsSchema)