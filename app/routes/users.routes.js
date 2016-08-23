module.exports = function(app) {
  var usersController     = require('../controllers/users.controller');

  // restful USER routes
  app.route('/signup')
      .get(usersController.new);

  app.route('/account')
      .get(usersController.edit);

 };
