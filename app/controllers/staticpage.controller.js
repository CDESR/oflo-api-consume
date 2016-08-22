// var webstorage        = require('webstorage'),
//     local             = require('webstorage-local');
//
// var storage = webstorage();
// var localStorage = webstorage(local('./tmp'));

module.exports = {
  // declare methods for each static page
  renderHome: function(req, res) {
    res.render('static_pages/index', {
      title: 'Welcome to OFlo',
    });
  }
};
