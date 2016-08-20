module.exports = function(app) {
  // require controller
  var staticPageController = require('../controllers/staticpage.controller');

  // static page routes
  app.route('/')
    .get(staticPageController.renderHome);
};
