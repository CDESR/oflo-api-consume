module.exports = function(app) {
  var usersController     = require('../controllers/users.controller');

  // restful USER routes
  app.route('/signup')
      .get(usersController.new)
      .post(usersController.create);

  app.param('user_id', usersController.user_by_id);
 };
