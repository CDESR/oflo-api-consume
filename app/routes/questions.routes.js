module.exports = function(app) {
  var questionsController  = require('../controllers/questions.controller');

  //restful questions routes
  app.route('/')
    .get(questionsController.index);

  app.route('/questions/new')
    .get(questionsController.new);

  app.route('/questions')
    .get(questionsController.show);
};
