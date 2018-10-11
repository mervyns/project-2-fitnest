const sha256 = require("js-sha256");

module.exports = db => {
  // Salt for Hash
  const SALT = "Too Much Salt Is Bad For Health";

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const listAllFood = (req, res) => {
    db.nutrition.getFoodList((err, queryResult) => {
      if (err) {
        console.log("Errror getting exercises:", err);
        res.sendStatus(500);
      }
      res.render("nutrition/listAllFood", {
        cookies: req.cookies,
        nutrition: queryResult
      });
    });
  };

  const addFoodForm = (req, res) => {
    res.render("nutrition/AddFoodForm", { cookies: req.cookies });
  };

  const addFood = (req, res) => {
    db.nutrition.addFood(req.body, (err, queryResult) => {
      if (err) {
        console.log("Error Adding Food:", err);
        res.sendStatus(500);
      }
      res.redirect("all");
    });
  };

  return {
    listAllFood,
    addFoodForm,
    addFood
  };
};
