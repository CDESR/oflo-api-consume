
module.exports = {
  // declare methods for each static page
  renderHome: function(req, res) {
    //req.flash('success', 'LOL');
    res.render('static_pages/index', {
      title: 'Welcome to OFlo',
      session: req.session,
      //success: req.flash('success')
    });
  }
};
