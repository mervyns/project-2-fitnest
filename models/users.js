const sha256 = require("js-sha256");
const moment = require("moment");

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  const createUser = (user, callback) => {
    // run user input password through bcrypt to obtain hashed password

    var hashedValue = sha256(user.password);

    // set up query
    // UPDATING QUERYSTRING to reject duplicate name entries
    const queryString =
      "INSERT INTO users (user_name, email, password, gender, age, height, weight, calories_target) SELECT ($1), ($2), ($3), ($4), ($5), ($6), ($7), ($8) WHERE NOT EXISTS ( SELECT * FROM users WHERE email=($9)) RETURNING *";
    const values = [
      user.name,
      user.email,
      hashedValue,
      user.gender,
      user.age,
      user.height,
      user.weight,
      user.caloriesTarget,
      user.email
    ];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  const login = (user, callback) => {
    const queryString =
      "SELECT * FROM users WHERE user_name = '" + user.name + "'";
    dbPoolInstance.query(queryString, (err, queryResult) => {
      callback(err, queryResult);
    });
  };

  const getDashboardInfo = (user, callback) => {
    const queryString =
      "SELECT * FROM users INNER JOIN daily_exercise_tracker ON users.user_id = daily_exercise_tracker.user_id INNER JOIN exercise ON exercise.exercise_id = daily_exercise_tracker.exercise_id WHERE users.user_id=($1) AND daily_exercise_tracker.created_date::date=($2)";
    const values = [user.user_id, moment().format("YYYY/MM/DD")];

    dbPoolInstance.query(queryString, values, (err, queryResult) => {
      callback(err, queryResult);
    });
  };

  const getDashboardNutriInfo = (user, callback) => {
    const queryString =
      "SELECT * FROM users INNER JOIN daily_nutri_tracker ON users.user_id = daily_nutri_tracker.user_id INNER JOIN nutrition ON nutrition.food_id = daily_nutri_tracker.food_id WHERE users.user_id=($1) AND daily_nutri_tracker.created_date::date=($2)";
    const values = [user.user_id, moment().format("YYYY/MM/DD")];

    dbPoolInstance.query(queryString, values, (err, queryResult2) => {
      callback(err, queryResult2);
    });
  };

  return {
    createUser,
    login,
    getDashboardInfo,
    getDashboardNutriInfo
  };
};
