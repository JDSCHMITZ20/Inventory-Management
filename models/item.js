const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  vender_number: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative errot");
    },
  },
  sku: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;