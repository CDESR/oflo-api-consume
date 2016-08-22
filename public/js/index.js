/* ---- Ajax calls for general purposes, eg.: login/signup ---- */

$(function() {
  var $signupBtn = $('.signup'),
    $loginBtn = $('.login-btn'),
    $first_name = $('#first_name'),
    $last_name = $('#last_name'),
    $emailAddress = $('#email_address'),
    $password = $('#password'),
    url = "//localhost:7000";


  $signupBtn.on('click', function() {


    $.ajax({

        url: url + '/users/signup',
        type: 'POST',
        data: {
          "first_name": $first_name.val(),
          "last_name": $last_name.val(),
          "email": $emailAddress.val(),
          "password": $password.val()
        }
      }).done(signupSuccess)
      .fail(signupFail);


    function signupSuccess() {
      $.ajax({

          url: url + '/users/login',
          type: 'POST',
          data: {
            "email": $emailAddress.val(),
            "password": $password.val()
          }
        }).done(loginSuccess)
        .fail(failResponse);
    }

    function signupFail(request, textStatus, errorThrown) {
      console.log('An error occurred during your request:' + request.status + ' ' + textStatus + ' ' + errorThrown);
    }

  });

  $loginBtn.on('click', function(e) {

    $.ajax({
        url: url + '/users/login',
        type: 'POST',
        data: {
          "email": $emailAddress.val(),
          "password": $password.val()
        }
      }).done(loginSuccess)
      .fail(failResponse);
  });

  function failResponse(request, textStatus, errorThrown) {
    console.log('An error occurred during your request:' + request.status + ' ' + textStatus + ' ' + errorThrown);
    // alert('fail');
  }
  function loginSuccess(data) {
    localStorage.setItem("ofloToken", data.token);
    localStorage.setItem("ofloUser", data.user_id);
    localStorage.setItem("ofloAdmin", data.is_admin);
    if (localStorage.ofloAdmin) {
      window.location = "commonquestions";
    }else {
      window.location = "questions"
    }

  }

});
