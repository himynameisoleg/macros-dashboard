
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const macronutrientSchema = new Schema(
  {
    protein: { type: Number, required: true },
		carbs: { type: Number, required: true },
		fat: { type: Number, required: true },
		sugar: { type: Number, required: true },
		saturatedfat: { type: Number, required: true },
		calories: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Macronutrient = mongoose.model("Macronutrient", macronutrientSchema);

module.exports = Macronutrient;
