var sha256 = require("js-sha256");

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  const getExerciseList = (callback) => {
    const queryString = "SELECT * FROM exercise";
    dbPoolInstance.query(queryString, (err, queryResult) => {
      callback(err, queryResult);
    });
  };

  const addExercise = (exercises, callback) => {
    const queryString = "INSERT INTO exercise (exercise_name, exercise_type, exercise_img, exercise_major_muscle_group, exercise_minor_muscle_group, exercise_notes) SELECT ($1), ($2), ($3), ($4), ($5), ($6) WHERE NOT EXISTS ( SELECT * FROM exercise WHERE exercise_name=($7)) RETURNING *";
    const values = [exercises.name, exercises.type, exercises.img, exercises.major, exercises.minor, exercises.notes, exercises.name];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  return {
    getExerciseList,
    addExercise
  };
};
