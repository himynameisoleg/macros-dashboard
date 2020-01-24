const router = require("express").Router();
let Macronutrient = require("../models/macronutrient.model");

router.route("/").get((req, res) => {
  Macronutrient.find()
    .then(macronutrient => res.json(macronutrient))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const protein = Number(req.body.protein);
  const carbs = Number(req.body.carbs);
  const fat = Number(req.body.fat);
  const sugar = Number(req.body.sugar);
  const saturatedfat = Number(req.body.saturatedfat);
  const calories = Number(req.body.calories);
  const date = Date.parse(req.body.date);

  const newMacronutrient = new Macronutrient({
    protein,
    carbs,
    fat,
    sugar,
    saturatedfat,
    calories,
    date
  });

  newMacronutrient
    .save()
    .then(() => res.json("Macronutrient added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Macronutrient.findById(req.params.id)
    .then(macronutrient => res.json(macronutrient))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Macronutrient.findByIdAndDelete(req.params.id)
    .then(macronutrient => res.json("Macronutrient deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Macronutrient.findById(req.params.id)
    .then(macronutrient => {
      macronutrient.protein = Number(req.body.protein);
      macronutrient.carbs = Number(req.body.carbs);
      macronutrient.fat = Number(req.body.fat);
      macronutrient.sugar = Number(req.body.sugar);
      macronutrient.saturatedfat = Number(req.body.saturatedfat);
      macronutrient.calories = Number(req.body.calories);
      macronutrient.date = Date.parse(req.body.date);

      macronutrient
        .save()
        .then(() => res.json("Macronutrient updated"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
