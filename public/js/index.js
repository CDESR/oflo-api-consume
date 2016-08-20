$(function() {
  var $signupBtn  = $('.signup-btn'),
      $loginBtn   = $('.login-btn');

  $signupBtn.on('click', function(){
    console.log('signup!');
    // ajax call to sign up
  });

  $loginBtn.on('click', function(){
    console.log('login!');
    // ajax call to login
  });
});
