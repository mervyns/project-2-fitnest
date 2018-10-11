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

  const addDailyFoodForm = (req, res) => {
    res.render("nutrition/DailyFoodForm", { cookies: req.cookies });
  };

  const addDailyFood = (req, res) => {
    db.nutrition.addDailyFood(req.body, (err, queryResult) => {
      if (err) {
        console.log("Error Adding Food:", err);
        res.sendStatus(500);
      }
      db.nutrition.addDailyFoodUser(req.cookies, req.body, (err, queryResult) => {
        if (err) {
          console.log("Error Adding Food User:", err);
          res.sendStatus(500);
        }
        res.redirect("../../dashboard");
      });
    });
  };

  const showFoodForDay = (req, res) => {
      db.nutrition.showFoodForDay(req.cookies, (err, queryResult) => {
          if (err) {
              console.log("Error getting food list for the day:", err);
              res.sendStatus(500)
          }
          res.render('nutrition/ListDailyFood', {food: queryResult})
      })
  }

  return {
    listAllFood,
    addFoodForm,
    addFood,
    addDailyFood,
    addDailyFoodForm,
    showFoodForDay
  };
};