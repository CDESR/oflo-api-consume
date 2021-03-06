/* ---- Ajax calls for questions ---- */
$(function() {
  var $qnBtn = $("#question-btn");
  var $qnInput = $("#question-input");
  var user_id = localStorage.oflo_user;
  var token = localStorage.oflo_token;



  $qnBtn.on('click', function() {
    console.log('click click');

    data = {
      question_content: $qnInput.val(),
      user_id: user_id
    };
    questions_input = JSON.stringify(data);
    // var token = localStorage.ofloToken;

    $.ajax({
      url: 'https://creds-oflo-server.herokuapp.com/questions',
      // url            = "http://localhost:7000/questions",
      type: 'POST',
      data: questions_input,
      dataType: 'json',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      crossDomain: true

      }).done(successFunction)
      .fail(failFunction);

    function successFunction() {
      alert('question posted successfully');
      window.location.replace("/questions");
    }

    function failFunction(req, textStatus, errorThrown) {
      if (req.responseJSON.errors.question_content.message === "Question content is required") {
        alert("Question needs to be filled");
        console.log(req.responseJSON.errors);
      }else{
        alert("Question is too long! Remember! Brevity is the soul of wit!");
        console.log(req.responseJSON.errors);
      }


    }

  });

  $.ajax({

      url: 'https://creds-oflo-server.herokuapp.com/questions',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer ' + token
      }

    }).done(successFunction)
    .fail(failFunction);

  function successFunction(data) {
    for (var i = 0; i < data.length; i++) {
      $("#qnListByName").append(document.createTextNode(data[i].question_content)).append('<br/>');

      $("#userFname").append(document.createTextNode(data[i].user_id['0'].first_name)).append('<br/>');
      // console.log(data[i]);
    }
    //user update answered checkbox
  }

  function failFunction() {
    console.log("something's wrong");
  }

  $('.list-names').on('click', '.qn-checkbox', function() {
    console.log(token);


    $.ajax({
        url: 'https://creds-oflo-server.herokuapp.com/questions/update/' + this.id,
        type: 'PUT',
        data: {
          answered: this.checked
        },
        // contentType: 'application/json',
        dataType: 'json',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        crossDomain: true,

      })
      .done(successFunction)
      .fail(failFunction);

    function successFunction(data) {
      console.log(data);
    }

    function failFunction(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    }

  });

  function failFunction(jqXHR, textStatus, errorThrown) {
    // alert("cannot show list");
  }



  $.ajax({

      url: 'https://creds-oflo-server.herokuapp.com/questions/' + user_id,
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      crossDomain: true


    }).done(showQnByUser)
    .fail(failShowQn);

  function showQnByUser(data) {

    for (var i = 0; i < data.length; i++) {
      $("#qnList").append( '<div class="qn-con">' + data[i].question_content + '</div>');
      // console.log(data[i]);

      var ansCheckId = data[i]._id;

      if (data[i].answered === true) {
        $("#ansCheck").append('<input class="qn-checkbox" type="checkbox" name="ans-checkbox" id=' + ansCheckId + ' checked "VisibleCheckbox">').append('<br/>');
      } else {
        $("#ansCheck").append('<input class="qn-checkbox" type="checkbox" name="ans-checkbox" id=' + ansCheckId + ' "VisibleCheckbox">').append('<br/>');
      }
    }

  }

  function failShowQn(jqXHR, textStatus, errorThrown) {
    console.log(errorThrown);
  }

});
