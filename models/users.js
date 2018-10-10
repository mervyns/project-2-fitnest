var sha256 = require("js-sha256");

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
    const queryString = "INSERT INTO users (user_name, email, password, gender, age, height, weight, calories_target) SELECT ($1), ($2), ($3), ($4), ($5), ($6), ($7), ($8) WHERE NOT EXISTS ( SELECT * FROM users WHERE email=($9)) RETURNING *";
    const values = [user.name, user.email, hashedValue, user.gender, user.age, user.height, user.weight, user.caloriesTarget, user.email];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  const login = (user, callback) => {
      const queryString = "SELECT * FROM users WHERE user_name = '"+user.name+"'";
      dbPoolInstance.query(queryString, (err, queryResult) => {
          callback(err, queryResult)
      })
  }

  const getDashboardInfo = (user, callback) => {
      const queryString = "SELECT * FROM users WHERE users.user_id='"+user.user_id+"'";
      dbPoolInstance.query(queryString, (err, queryResult) => {
          callback(err, queryResult)
      })
  }

  const followUser = (user, followedUser, callback) => {
      const queryString = "INSERT INTO followers (user_id, follower_user_id) SELECT ($1), ($2) WHERE NOT EXISTS (SELECT * FROM followers WHERE followers.follower_user_id=($3))";
      const values = [followedUser.id, user.user_id, user.user_id]
      dbPoolInstance.query(queryString, values, (err, queryResult)=> {
          callback(err, queryResult)
      })
  }

  return {
    createUser,
    login,
    getDashboardInfo,
    followUser
  };
};
