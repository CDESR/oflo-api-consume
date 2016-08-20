module.exports = {
  index: function(req, res) {
    res.render('questions/index', {
      title: 'Question Board'
    });
  },
  new: function(req, res, next) {
    // new question form
  },
  create: function(req, res, next) {
    // post new question
  },
  destroy: function(req, res, next) {
    // delete question
  }

};
