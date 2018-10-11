var sha256 = require("js-sha256");

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  const getFoodList = (callback) => {
    const queryString = "SELECT * FROM nutrition";
    dbPoolInstance.query(queryString, (err, queryResult) => {
      callback(err, queryResult);
    });
  };

  const addFood = (food, callback) => {
    const queryString = "INSERT INTO nutrition (food_name, food_type, food_calories, portion) SELECT ($1), ($2), ($3), ($4) WHERE NOT EXISTS ( SELECT * FROM nutrition WHERE food_name=($5)) RETURNING *";
    const values = [food.name, food.type, food.calories, food.portion, food.name];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  return {
    getFoodList,
    addFood
  };
};
