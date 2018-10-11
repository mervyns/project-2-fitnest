const sha256 = require("js-sha256");

module.exports = db => {
  // Salt for Hash
  const SALT = "Too Much Salt Is Bad For Health";

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  // Controllers for Creating New Users
  const newForm = (req, res) => {
    res.render("users/CreateUser", {cookies: req.cookies});
  };

  const createUser = (req, res) => {
    // use user model method `create` to create new user entry in db
    db.users.createUser(req.body, (err, queryResult) => {
      if (err) {
        console.log("Errror getting user:", err);
        res.sendStatus(500);
      }
      if (queryResult.rowCount >= 1) {
        console.log("User created successfully");
        // Hashing Current Session Cookie
        let currentSessionCookie = sha256(
          queryResult.rows[0].user_id + "logged_id" + SALT
        );
        // drop cookies to indicate user's logged in status and username
        res.cookie("loggedIn", currentSessionCookie);
        res.cookie("user_id", queryResult.rows[0].user_id);
        // redirect to home page after creation
        res.redirect("/");
      } else {
        console.log("User could not be created");
// Adding a prop to display a message when User ID is same
        res.render("users/CreateUser", {message: "this userid has been taken", cookies: req.cookies})
      }
    });
  };

  // Controllers for Logging in Users
  const loginForm = (req, res) => {
    res.render("users/LoginUser", {cookies: req.cookies});
  };

  const loginUser = (req, res) => {
    db.users.login(req.body, (err, queryResult) => {
      if (err) {
        console.log("Error Logging User In:", err);
        res.sendStatus(500);
      }
      let hashedPass = sha256(req.body.password);
      // Hashing Current Session Cookie
      let currentSessionCookie = sha256(
        queryResult.rows[0].user_id + "logged_id" + SALT
      );

      if (
        queryResult.rows[0] !== undefined &&
        queryResult.rows[0].password === hashedPass
      ) {
        res.cookie("loggedIn", currentSessionCookie);
        res.cookie("user_id", queryResult.rows[0].user_id);

        console.log("User successfully logged in");
        res.redirect("/");
      } else {
        console.log("User could not be logged in");
      }
    });
  };

// Show Individual User Dashboard
const showUserDashboard = (req, res) => {
// Getting from Cookies so that Users can only access their own individual dashboard
    db.users.getDashboardInfo(req.cookies, (err, queryResult)=> {
        if (err) {
            console.error("Error Showing User: ",err)
        }
        res.render("users/UserDashboard", {userInfo : queryResult.rows, cookies: req.cookies})
    })
}

// Show Main OVERALL User Dashboard
const showMainDashboard = (req, res) => {
// Getting from Cookies so that Users can only access their own individual dashboard
    db.users.getDashboardInfo(req.cookies, (err, queryResult)=> {
        if (err) {
            console.error("Error Showing User: ",err)
        }
        res.render("layout/MainDashboard", {userInfo : queryResult.rows, cookies: req.cookies})
    })
}

// Logging Out User by Clearing Cookies
  const logoutUser = (req, res) => {
      res.clearCookie('loggedIn');
      res.clearCookie('user_id')
      res.redirect('/')
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    newForm,
    createUser,
    loginForm,
    loginUser,
    showUserDashboard,
    logoutUser,
    showMainDashboard

  };
};
