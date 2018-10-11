const sha256 = require("js-sha256");
const moment = require("moment");

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  const getFoodList = callback => {
    const queryString = "SELECT * FROM nutrition";
    dbPoolInstance.query(queryString, (err, queryResult) => {
      callback(err, queryResult);
    });
  };

  const addFood = (food, callback) => {
    const queryString =
      "INSERT INTO nutrition (food_name, food_type, food_calories, portion) SELECT ($1), ($2), ($3), ($4) WHERE NOT EXISTS ( SELECT * FROM nutrition WHERE food_name=($5)) RETURNING *";
    const values = [
      food.name,
      food.type,
      food.calories,
      food.portion,
      food.name
    ];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  const addDailyFood = (food, callback) => {
    const queryString =
      "INSERT INTO daily_nutri_tracker (food_id) SELECT food_id FROM nutrition WHERE food_name='" +
      food.name +
      "'";

    // execute query
    dbPoolInstance.query(queryString, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  const addDailyFoodUser = (user, food, callback) => {
    const queryString =
      "UPDATE daily_nutri_tracker SET user_id=($1), created_date=($2), food_qty=($3) WHERE item_id =(SELECT MAX(item_id) from daily_nutri_tracker);"
    const values = [user.user_id, moment.utc(), food.qty];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  const showFoodForDay = (user, callback) => {
      const queryString="SELECT * from nutrition INNER JOIN daily_nutri_tracker ON nutrition.food_id = daily_nutri_tracker.food_id WHERE created_date::date=($1) AND user_id=$2"
      const values = [moment().format("YYYY/MM/DD"), user.user_id]
      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
  }

  return {
    getFoodList,
    addFood,
    addDailyFood,
    addDailyFoodUser,
    showFoodForDay
  };
};
