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

  // Code for Daily Exercise Tracking Actions
  const addDailyExerciseForm = (req, res) => {
    res.render("exercises/AddDailyExerciseForm", { cookies: req.cookies });
  };
  // Method for Adding Exercise
  const addDailyExercise = (req, res) => {
    db.exercises.addDailyExercise(req.body, (err, queryResult) => {
      if (err) {
        console.log("Error Adding Exercise:", err);
        res.sendStatus(500);
      }
      console.log(req.body);
      db.exercises.addDailyExerciseUser(
        req.cookies,
        req.body,
        (err, queryResult) => {
          if (err) {
            console.log("Error Adding Exercise User:", err);
            res.sendStatus(500);
          }
          // TODO: UPDATE RES ACTION
          res.redirect("../../dashboard");
        }
      );
    });
  };
  // Show Exercises from Daily Exercise List
  const showExerciseForDay = (req, res) => {
    db.exercises.showExerciseForDay(req.cookies, (err, queryResult) => {
      if (err) {
        console.log("Error getting food list for the day:", err);
        res.sendStatus(500);
      }
      res.render("exercises/ListDailyExercise", { exerciseInfo: queryResult.rows });
    });
  };

  // Show Exercises Dashboard to see Exercises done over the past week
  // Very Manually Hardcoded for now
  const showExerciseDashboard = (req, res) => {
    db.exercises.showExerciseForDayMinus1(req.cookies, (err, queryResult1) => {
      if (err) {
        console.log("Error getting Exercise Dashboard:", err);
        res.sendStatus(500);
      }
      db.exercises.showExerciseForDay(req.cookies, (err, queryResult) => {
        if (err) {
          console.log("Error getting exercise list for the day:", err);
          res.sendStatus(500);
        }
        db.exercises.showExerciseForDayMinus2(
          req.cookies,
          (err, queryResult2) => {
            if (err) {
              console.log("Error getting exercise list for the day:", err);
              res.sendStatus(500);
            }
            res.render("exercises/ListWeeklyExercise", {
                cookies: req.cookies,
              exerciseInfo: queryResult,
              exerciseInfo1: queryResult1,
              exerciseInfo2: queryResult2
            });
          }
        );
      });
    });
  };

  return {
    listAllExercises,
    addExercise,
    addExerciseForm,
    addDailyExerciseForm,
    addDailyExercise,
    showExerciseForDay,
    showExerciseDashboard
  };
};
