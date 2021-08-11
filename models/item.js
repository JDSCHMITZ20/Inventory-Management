// fix the schema later


const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  price: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative prices aren't real.");
    },
  },
  date: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;