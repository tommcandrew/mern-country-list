const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Country = new Schema({
  name: { type: String, requred: true },
  capital: { type: String, requred: true }
});

module.exports = mongoose.model("Country", Country);
