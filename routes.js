module.exports = (app, db) => {

  const users = require('./controllers/users')(db);

  // Root Route
  app.get('/', (req, res) => {
      res.render('index')
  });

  /*
   *  =========================================
   *  Users
   *  =========================================
   */
   // CRUD users
   app.get('/users/new', users.newForm);
   app.get('/users/login', users.loginForm);
   // app.get('/users/logout', users.logoutUser);
   app.post('/users/new', users.createUser);
   app.post('/users/login', users.loginUser);
   //

};
