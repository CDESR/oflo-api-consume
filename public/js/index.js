/* ---- Ajax calls for general purposes, eg.: login/signup ---- */

$(function() {
  var $signupBtn  = $('.signup-btn'),
      $loginBtn   = $('.login-btn'),
      $testSignup = $(".test-signup"),
      $testLogin = $(".test-login"),
      url= "//localhost:7000";


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

  $testSignup.on('click', function () {
    var ita = {
                first_name: "test",
                last_name: "tester",
                email: "test234@test.com",
                password: "123456"
              };

    var student = {
                first_name: "student",
                last_name: "tester",
                email: "student@test.com",
                password: "123456",
                admin: false
              };

    $.ajax({
      url: url + "/users/signup",
      method: "POST",
      data: student,
      dataType: "JSON",
      crossDomain: true
    }).done(tsignupSuccess)
      .fail(tsignupFail);
  });

  function tsignupSuccess(data) {
    console.log(data);
  }

  function tsignupFail(qXHR, textStatus, errorThrown) {
    console.log(textStatus);
  }

  $testLogin.on('click',function () {
    var ita = {
                email: "test234@test.com",
                password: "123456"
              };

    var student = {
                email: "student@test.com",
                password: "123456"
              };

    $.ajax({
      url: url + "/users/login",
      method: "POST",
      data: student,
      dataType: "JSON",
      crossDomain: true
    }).done(tloginSuccess)
      .fail(tloginFail);
  });

  function tloginSuccess(data) {
    console.log("clicked");
    console.log(data);
    localStorage.setItem("ofloToken", data.token);
    localStorage.setItem("ofloUser", data.user_id);
    localStorage.setItem("ofloAdmin", data.is_admin);
    // $qnLabel.html('students questions')
    // $qnTest.html('help!!!')
    // if (localStorage.ofloAdmin) {
    //   $qnLabel.html("Students' Questions");
    //   $test.text("Admin here");
    // } else{
    //   $test.text("Students here");

  }

  function tloginFail(qXHR, textStatus, errorThrown) {
    console.log(qXHR);
  }
});
