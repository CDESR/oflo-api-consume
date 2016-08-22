module.exports = function(app) {
  var usersController     = require('../controllers/users.controller');

  // restful USER routes
  app.route('/signup')
      .get(usersController.new);

  app.route('/:user_id')
      .get(usersController.edit);

  app.param('user_id', usersController.user_by_id);
 };
