const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    title: { type: String},
    income: { type: String},
    expense: { type: String},
  },
  {
    collection: "todos",
    timestamps: true,
  }
);

const model = mongoose.model("Todo", schema);

module.exports = model;