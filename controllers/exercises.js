const sha256 = require("js-sha256");
const moment = require("moment");

module.exports = db => {
  // Salt for Hash
  const SALT = "Too Much Salt Is Bad For Health";

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const listAllExercises = (req, res) => {
    db.exercises.getExerciseList((err, queryResult) => {
      if (err) {
        console.log("Errror getting exercises:", err);
        res.sendStatus(500);
      }
      res.render("exercises/listAllExercises", {
        cookies: req.cookies,
        exercises: queryResult
      });
    });
  };

  const addExerciseForm = (req, res) => {
    res.render("exercises/AddExerciseForm", { cookies: req.cookies });
  };

  const addExercise = (req, res) => {
    db.exercises.addExercise(req.body, (err, queryResult) => {
      if (err) {
        console.log("Error Adding Exercise:", err);
        res.sendStatus(500);
      }
      res.redirect("all");
    });
  };

  // Code for Daily Nutrition Tracking Actions
  const addDailyExerciseForm = (req, res) => {
    res.render("exercises/AddDailyExerciseForm", { cookies: req.cookies });
  };

  const addDailyExercise = (req, res) => {
    db.exercises.addDailyExercise(req.body, (err, queryResult) => {
      if (err) {
        console.log("Error Adding Exercise:", err);
        res.sendStatus(500);
      }
      console.log(req.body)
      db.exercises.addDailyExerciseUser(
        req.cookies,
        req.body,
        (err, queryResult) => {
          if (err) {
            console.log("Error Adding Exercise User:", err);
            res.sendStatus(500);
          }
          res.send("done with daily exercise adding");
        }
      );
    });
  };

  const showExerciseForDay = (req, res) => {
    db.exercises.showExerciseForDay(req.cookies, (err, queryResult) => {
      if (err) {
        console.log("Error getting food list for the day:", err);
        res.sendStatus(500);
      }
      res.render("exercises/ListDailyExercise", { exercise: queryResult });
    });
  };

  return {
    listAllExercises,
    addExercise,
    addExerciseForm,
    addDailyExerciseForm,
    addDailyExercise,
    showExerciseForDay
  };
};
