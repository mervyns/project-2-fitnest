module.exports = (app, db) => {

  const users = require('./controllers/users')(db);

  // Root Route
  app.get('/', (req, res) => {
      res.render('index', {cookies: req.cookies})
  });

  /*
   *  =========================================
   *  Users
   *  =========================================
   */
   // CRUD users
   app.get('/users/new', users.newForm);
   app.get('/users/login', users.loginForm);
   app.get('/users/logout', users.logoutUser);
   app.get('/users/dashboard', users.showUserDashboard)
   app.post('/users/new', users.createUser);
   app.post('/users/login', users.loginUser);

};
