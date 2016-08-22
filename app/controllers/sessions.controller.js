module.exports = {
  new: function(req, res) {
    console.log('anything');
    res.render('sessions/new', {
      title: 'Login to OFlo'
    });
  }

};
