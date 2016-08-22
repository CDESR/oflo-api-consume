/* ---- Ajax calls for general purposes, eg.: login/signup ---- */

$(function() {
  var $signupBtn  = $('.signup-btn'),
      $loginBtn   = $('.login-btn');

  $signupBtn.on('click', function(){
    console.log('signup!');
    // ajax call to sign up

    window.location = "signup";
  });

  $loginBtn.on('click', function(){
    console.log('login!');
    // ajax call to login
    window.location = "login";
  });
});
