module.exports = function(app) {
  var questionsController  = require('../controllers/questions.controller');

  //restful questions routes
  app.route('/questions')
    .get(questionsController.index);

  app.route('/questions/new')
    .get(questionsController.new);
    // .post(questionsController.create)
    // .delete(questionsController.destroy);

  app.route('/myquestions')
    .get(questionsController.show);
};
