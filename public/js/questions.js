/* ---- Ajax calls for questions ---- */
$(function() {
  var $qnBtn = $("#question-btn");
  var $qnInput = $("#question-input");

  $qnBtn.on('click', function() {
    console.log('click click');

    data = {
      question_content : $qnInput.val()
    };
    questions_input = JSON.stringify(data);

    $.ajax({

      url: 'http://localhost:7000/questions',
      type: 'POST',
      data: questions_input,
      dataType: 'json',
      contentType: 'application/json'

    }).done(successFunction)
      .fail(failFunction);

      function successFunction() {
        alert('question posted successfully');
      }

      function failFunction(jqXHR, textStatus, errorThrown){ console.log(errorThrown); }

  });
});
