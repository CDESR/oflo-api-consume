/* ---- Ajax calls for questions ---- */
$(function() {
  var $qnBtn = $("#question-btn");
  var $qnInput = $("#question-input");
  var user_id = localStorage.oflo_user;



  $qnBtn.on('click', function() {
    console.log('click click');

    data = {
      question_content: $qnInput.val(),
      user_id: user_id
    };
    questions_input = JSON.stringify(data);
    var token = localStorage.ofloToken;

    $.ajax({
      url: 'https://creds-oflo-server.herokuapp.com/questions',
      // url            = "http://localhost:7000/questions",
      type: 'POST',
      data: questions_input,
      dataType: 'json',
      contentType: 'application/json',
      Authorization: 'Bearer ' + token,
      crossDomain: true

      }).done(successFunction)
      .fail(failFunction);

    function successFunction() {
      alert('question posted successfully');
      window.location.replace("/questions");
    }

    function failFunction(jqXHR, textStatus, errorThrown) {
      alert("Question needs to be filled");
    }

  });

  $.ajax({

      url: 'https://creds-oflo-server.herokuapp.com/questions',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json'

    }).done(successFunction)
    .fail(failFunction);

  function successFunction(data) {

    for (var i = 0; i < data.length; i++) {
      $("#qnList").append(document.createTextNode(data[i].question_content)).append('<br/>');

      var ansCheckId = data[i]._id;

      if (data[i].answered === true) {
        $("#ansCheck").append('<input class="qn-checkbox" type="checkbox" name="ans-checkbox" id=' + ansCheckId + ' checked "VisibleCheckbox">').append('<br/>');
      } else {
        $("#ansCheck").append('<input class="qn-checkbox" type="checkbox" name="ans-checkbox" id=' + ansCheckId + ' "VisibleCheckbox">').append('<br/>');
      }
    }

    //user update answered checkbox
  }

  $('.list-names').on('click', '.qn-checkbox', function() {

    console.log('test');
    var stringThisCheck = JSON.stringify(this.checked);

    $.ajax({
        url: 'https://creds-oflo-server.herokuapp.com/questions' + this.id,
        type: 'PUT',
        data: {
          answered: this.checked
        },
        // dataType: 'JSON',
        // contentType: 'application/json'
          // Authorization: 'Bearer ' + token
      })
      .done(successFunction)
      .fail(failFunction);

    function successFunction(data) {
      alert('update successful');
    }

    function failFunction(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    }

  });

  function failFunction(jqXHR, textStatus, errorThrown) {
    alert('Question needs to be filled');
  }



  $.ajax({

      url: 'https://creds-oflo-server.herokuapp.com/questions',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json'


    }).done(showQnByUser)
    .fail(failShowQn);

  function showQnByUser(data) {

    for (var i = 0; i < data.length; i++) {

      $("#qnListByName").append(document.createTextNode(data[i].question_content)).append('<br/>');

      $("#userFname").append(document.createTextNode(data[i].user_id['0'].first_name)).append('<br/>');
      // console.log(data[i]);
    }
  }

  function failShowQn(jqXHR, textStatus, errorThrown) {
    console.log(errorThrow);
  }

});
