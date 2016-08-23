/* ---- Ajax calls for general purposes, eg.: login/signup ---- */

$(function() {
  var $url            = "https://creds-oflo-server.herokuapp.com/",
      // $url            = "http://localhost:7000/",
      $navbar         = $('.oflo-navbar'),
      $ofloLogo       = $('.oflo-logo'),
      $commonQTab     = $('.commonq-tab'),
      $qnsTab         = $('.q-tab');

  var $signupBtn      = $('.signup-btn'),
      $signupSubmit   = $('.signup-submit'),
      $first_name     = $('.fname-input'),
      $last_name      = $('.lname-input'),
      $email          = $('.email-input'),
      $password       = $('.password-input');

  var $loginBtn       = $('.login-btn'),
      $loginSubmit    = $('.login-submit'),
      $email_login    = $('.email-login'),
      $password_login = $('.password-login');

  var $logoutBtn      = $('.logout-btn');

  var $flashSuccess   = $('.show-success'),
      $flashFail      = $('.show-fail');

  /* ------------------------------------------------------------ */

  /* ---- Toggling navbar ---- */
  if(localStorage.getItem("oflo_token")){
    //if logged in
    $navbar.show();
    // toggle navbar menus
    if(localStorage.oflo_admin == "true") {
      $commonQTab.show();
      $qnsTab.hide();
    } else {
      $qnsTab.show();
      $commonQTab.hide();
    }

  } else {
    $navbar.hide();
  }

  /* ---- Toggling flash ---- */
  $flashSuccess.hide();
  $flashFail.hide();

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
      method:         "POST",
      url:            $url + "users/signup",
      dataType:       "json",
      contentType:    'application/json',
      data:           signup_data,
      crossDomain: true

    }).done(function(data){
        //console.log(data);
        $flashSuccess.show();
        $flashSuccess.text('Thank you for registering with us, ' + data.fullName);
    })
    .fail(function(req, textStatus, errThrown){
        var errors = req.responseJSON.errors;
        $.each(errors, function(key, value) {
          console.log(value.message);
          $flashFail.append("<li>" + value.message + "</li>");
        })
        $flashFail.show();


    });
  });

  /* ---- Login ---- */
  $loginBtn.on('click', function(e){
    // redirect to login page
    window.location = "login";
  });

  $loginSubmit.on('click', function(e){
    e.preventDefault();
    // ajax call to login
    data = {
      email:      $email_login.val(),
      password:   $password_login.val()
    };

    login_data = JSON.stringify(data);

    $.ajax({
      method:         "POST",
      url:            $url + "users/login",
      dataType:       "json",
      contentType:    'application/json',
      data:           login_data,
      crossDomain: true

    }).done(function(data){
        //console.log(data);
        //console.log(typeof(data.is_admin));
        localStorage.setItem("oflo_token", data.token);
        localStorage.setItem("oflo_user", data.user_id);
        localStorage.setItem("oflo_admin", data.is_admin);

        // .setItem converts is_admin to String
        if(localStorage.oflo_admin == "true") {
          // if ITA logged in
          window.location = "commonquestions";
        }
        else if(localStorage.oflo_admin == "false"){
          // if student logged in
          window.location = "questions";
        }

    })
    .fail(function(req, textStatus, errThrown){
      $flashFail.show();
      $flashFail.text(req.responseJSON.message);
    });
  });

  /* ---- Logout ---- */
  $logoutBtn.on('click', function(e){
    e.preventDefault();
    // destroy the token, user and admin
    localStorage.removeItem("oflo_token");
    localStorage.removeItem("oflo_user");
    localStorage.removeItem("oflo_admin");
    // redirect to root page
    window.location = "/";
  });

  /* ---- Home ---- */
  $ofloLogo.on('click', function(e){
    e.preventDefault();
  });

});
