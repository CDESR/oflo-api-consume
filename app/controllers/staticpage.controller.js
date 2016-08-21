module.exports = {
  // declare methods for each static page
  renderHome: function(req, res) {
    res.render('static_pages/index', {
      title: 'Welcome to OFlo',
      session: req.session
    });
  }
};
