module.exports = {
  new: function(req, res) {
    res.render('sessions/new', {
      title: 'Login to OFlo'
    });
  }

};
