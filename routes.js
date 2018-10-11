module.exports = (app, db) => {
  const users = require("./controllers/users")(db);
  const exercises = require("./controllers/exercises")(db);
  const nutrition = require("./controllers/nutrition")(db);

  // Root Route
  app.get("/", (req, res) => {
    res.render("index", { cookies: req.cookies });
  });
// Testing Routes
  app.get('/dashboard', users.showMainDashboard)

  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD users
  app.get("/users/new", users.newForm);
  app.get("/users/login", users.loginForm);
  app.get("/users/logout", users.logoutUser);
  app.get("/users/dashboard", users.showUserDashboard);
  app.post("/users/new", users.createUser);
  app.post("/users/login", users.loginUser);

  // CRUD Exercises
  // Route to show all Exercises
  app.get("/exercises/all", exercises.listAllExercises);
  app.get("/exercises/new", exercises.addExerciseForm);
  app.post("/exercises/new", exercises.addExercise);

  // CRUD Nutrition
  // Route to show all Nutrition
  app.get("/nutrition/all", nutrition.listAllFood);
  app.get("/nutrition/new", nutrition.addFoodForm);
  app.get("/nutrition/daily/new", nutrition.addDailyFoodForm);
  app.get('/nutrition/daily/show', nutrition.showFoodForDay)
  app.post("/nutrition/new", nutrition.addFood);
  app.post("/nutrition/daily/new", nutrition.addDailyFood);
};
