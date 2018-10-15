const sha256 = require("js-sha256");
const moment = require("moment");

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  const getExerciseList = callback => {
    const queryString = "SELECT * FROM exercise";
    dbPoolInstance.query(queryString, (err, queryResult) => {
      callback(err, queryResult);
    });
  };

  const addExercise = (exercises, callback) => {
    const queryString =
      "INSERT INTO exercise (exercise_name, exercise_type, exercise_img, exercise_major_muscle_group, exercise_minor_muscle_group, exercise_notes) SELECT ($1), ($2), ($3), ($4), ($5), ($6) WHERE NOT EXISTS ( SELECT * FROM exercise WHERE exercise_name=($7)) RETURNING *";
    const values = [
      exercises.name,
      exercises.type,
      exercises.img,
      exercises.major,
      exercises.minor,
      exercises.notes,
      exercises.name
    ];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  // Models for Daily Exercises
  const addDailyExercise = (exercise, callback) => {
    const queryString =
      "INSERT INTO daily_exercise_tracker(exercise_id) SELECT exercise_id FROM exercise WHERE exercise_name='" +
      exercise.name +
      "'";
    // execute query
    dbPoolInstance.query(queryString, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  const addDailyExerciseUser = (user, exercise, callback) => {
    const queryString =
      "UPDATE daily_exercise_tracker SET user_id=($1), created_date=($2), exercise_qty=($3) WHERE item_id =(SELECT MAX(item_id) from daily_exercise_tracker);";
    const values = [user.user_id, moment.utc(), exercise.qty];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  const showExerciseForDay = (user, callback) => {
    const queryString =
      "SELECT * from exercise INNER JOIN daily_exercise_tracker ON exercise.exercise_id = daily_exercise_tracker.exercise_id WHERE created_date::date=($1) AND user_id=$2";
    const values = [moment().format("YYYY/MM/DD"), user.user_id];
    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  const showExerciseForDayMinus1 = (user, callback) => {
    const queryString =
      "SELECT * from exercise INNER JOIN daily_exercise_tracker ON exercise.exercise_id = daily_exercise_tracker.exercise_id WHERE created_date::date=($1) AND user_id=$2";
    const values = [
      moment()
        .subtract(1, "days")
        .format("YYYY/MM/DD"),
      user.user_id
    ];
    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  const showExerciseForDayMinus2 = (user, callback) => {
    const queryString =
      "SELECT * from exercise INNER JOIN daily_exercise_tracker ON exercise.exercise_id = daily_exercise_tracker.exercise_id WHERE created_date::date=($1) AND user_id=$2";
    const values = [
      moment()
        .subtract(2, "days")
        .format("YYYY/MM/DD"),
      user.user_id
    ];
    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };
  // DB Query for Inserting into Fitness Plan Join Table
  const createExercisePlan = (exercise, user, callback) => {
    const queryString =
      "INSERT INTO fit_plan (fit_plan_name, fit_plan_description, user_id, created_date) SELECT ($1), ($2), ($3), ($4) WHERE NOT EXISTS ( SELECT * FROM fit_plan WHERE fit_plan_name=($5)) RETURNING *;";
    const values = [
      exercise.planName,
      exercise.description,
      user.user_id,
      moment.utc(),
      exercise.planName
    ];
    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };
  // Additional Step to Update the EXERCISE ID because we are only giving the exercise name
  const insertExerciseId = (exercise, callback) => {
    const queryString =
      "UPDATE fit_plan SET exercise_id = (SELECT exercise_id FROM exercise WHERE exercise_name='" +
      exercise.exerciseName +
      "')";
    // execute query
    dbPoolInstance.query(queryString, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  // Get the List of Fitness Plans from the DB
  const getFitnessPlans = callback => {
    const queryString =
      "SELECT * FROM fit_plan INNER JOIN exercise ON fit_plan.exercise_id = exercise.exercise_id";
    // execute query
    dbPoolInstance.query(queryString, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  return {
    getExerciseList,
    addExercise,
    addDailyExercise,
    addDailyExerciseUser,
    showExerciseForDay,
    showExerciseForDayMinus1,
    showExerciseForDayMinus2,
    createExercisePlan,
    insertExerciseId,
    getFitnessPlans
  };
};
