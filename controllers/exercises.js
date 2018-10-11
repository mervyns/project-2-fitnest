const sha256 = require("js-sha256");

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

  return {
    listAllExercises,
    addExercise,
    addExerciseForm
  };
};
