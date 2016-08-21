module.exports = function(app) {
  var commonquestionsController  = require('../controllers/commonquestions.controller');

  //restful common questions routes
  app.route('/commonquestions')
    .get(commonquestionsController.index);
    // .delete(commonquestionsController.destroy);

  app.route('/commonquestions/new')
    .get(commonquestionsController.new);
    // .post(commonquestionsController.create)

  app.route('/mycommonquestions')
    .get(commonquestionsController.show);
};
