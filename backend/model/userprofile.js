const mongoose = require("mongoose");

const Userprofileschema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});
