/* ---- Ajax calls for general purposes, eg.: login/signup ---- */

$(function() {
  var $navbar         = $('.oflo-navbar'),
      $url            = "http://localhost:7000/";

  var $signupBtn      = $('.signup-btn'),
      $signupSubmit   = $('.signup-submit'),
      $first_name     = $('.fname-input'),
      $last_name      = $('.lname-input'),
      $email          = $('.email-input'),
      $password       = $('.password-input');

  var $loginBtn       = $('.login-btn'),
      $testSignup     = $(".test-signup"),
      $testLogin      = $(".test-login");

// localStorage.setItem("jwt_token", "123565555");
// localStorage.removeItem("jwt_token");
// if(localStorage.getItem("jwt_token")){
//   $navbar.show();
// } else{
//   $navbar.hide();
// }

  /* ---- Signing up ---- */
  $signupBtn.on('click', function(){
    // redirect to /signup page
    window.location = "signup";
  });

  $signupSubmit.on('click', function(e) {
    e.preventDefault();
    // ajax call to sign up
    data = {
      first_name: $first_name.val(),
      last_name:  $last_name.val(),
      email:      $email.val(),
      password:   $password.val()
    };
    // stringify before passing to API
    signup_data = JSON.stringify(data);

    $.ajax({
      method: "POST",
      url: $url + "users/signup",
      dataType: "json",
      contentType: 'application/json',
      data: signup_data
    }).done(function(data){
      window.location = "/";

    })
    .fail(function(req, textStatus, errThrown){
      console.log(req.responseText);
    });

  });

  /* ---- Login ---- */
  $loginBtn.on('click', function(){
    console.log('login!');
    // ajax call to login
    window.location = "login";
  });


  // $testSignup.on('click', function () {
  //   var ita = {
  //               first_name: "test",
  //               last_name: "tester",
  //               email: "test234@test.com",
  //               password: "123456"
  //             };
  //
  //   var student = {
  //               first_name: "student",
  //               last_name: "tester",
  //               email: "student@test.com",
  //               password: "123456",
  //               admin: false
  //             };
  //
  //   $.ajax({
  //     url: url + "/users/signup",
  //     method: "POST",
  //     data: student,
  //     dataType: "JSON",
  //     crossDomain: true
  //   }).done(tsignupSuccess)
  //     .fail(tsignupFail);
  // });
  //
  // function tsignupSuccess(data) {
  //   console.log(data);
  // }
  //
  // function tsignupFail(qXHR, textStatus, errorThrown) {
  //   console.log(textStatus);
  // }
  //
  // $testLogin.on('click',function () {
  //   var ita = {
  //               email: "test234@test.com",
  //               password: "123456"
  //             };
  //
  //   var student = {
  //               email: "student@test.com",
  //               password: "123456"
  //             };
  //
  //   $.ajax({
  //     url: url + "/users/login",
  //     method: "POST",
  //     data: ita,
  //     dataType: "JSON",
  //     crossDomain: true
  //   }).done(tloginSuccess)
  //     .fail(tloginFail);
  // });
  //
  // function tloginSuccess(data) {
  //   console.log("clicked");
  //   console.log(data);
  //   localStorage.setItem("ofloToken", data.token);
  //   localStorage.setItem("ofloUser", data.user_id);
  //   localStorage.setItem("ofloAdmin", data.is_admin);
  //   // $qnLabel.html('students questions')
  //   // $qnTest.html('help!!!')
  //   // if (localStorage.ofloAdmin) {
  //   //   $qnLabel.html("Students' Questions");
  //   //   $test.text("Admin here");
  //   // } else{
  //   //   $test.text("Students here");
  //
  // }
  //
  // function tloginFail(qXHR, textStatus, errorThrown) {
  //   console.log(qXHR);
  // }

});
