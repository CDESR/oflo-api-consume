/* ---- Ajax calls for questions ---- */
$(function() {
  var $qnBtn = $("#question-btn");
  var $qnInput = $("#question-input");

  $qnBtn.on('click', function() {
    console.log('click click');

    data = {
      question_content : $qnInput.val(),
      user_id : localStorage.ofloUser
    };
    questions_input = JSON.stringify(data);
    var token = localStorage.ofloToken;

    $.ajax({

      url: 'http://localhost:7000/questions',
      type: 'POST',
      data: questions_input,
      dataType: 'json',
      contentType: 'application/json',
      Authorization: 'Bearer ' + token

    }).done(successFunction)
      .fail(failFunction);

      function successFunction() {
        alert('question posted successfully');
        window.location.replace("/questions");
      }

      function failFunction(jqXHR, textStatus, errorThrown){ alert("Question needs to be filled"); }

  });
});
