/* ---- Ajax calls for common questions ---- */
$(function (){

  var url= "//localhost:7000";
  var $commonquestion = $("#commquestion");

  $.ajax({
    // url: 'localhost:7000/commonquestions',
    url: 'http://localhost:7000/commonquestions',
    type: 'GET',
    // data: commQuestion,
    datatype: 'json',
    // contentType: "application/json",
    crossDomain: true,
  }).done(successFn1)
    .fail(failFn1);


function successFn1(data){
  // console.log(data);
  for (var i = 0; i < data.length; ++i) {

      $("#common-questions").append(document.createTextNode(data[i].commonQuestion)).append('<br/>');

      if ( data[i].canVote === true ) {
        // $('answered-check').prop('checked', true)
        $("#canvote-check").append('<input type="checkbox" name="canvote" id="canvote-checkbox" checked "VisibleCheckbox">').append('<br/>');
      } else {
        // $('answered-check').prop('checked', false)
        $("#canvote-check").append('<input type="checkbox" name="canvote" id="canvote-checkbox" "VisibleCheckbox">').append('<br/>');
      }

      if ( data[i].answered === true ) {
        // $('answered-check').prop('checked', true)
        $("#answered-check").append('<input type="checkbox" name="answered" id="answered-checkbox" checked "VisibleCheckbox">').append('<br/>');
      } else {
        // $('answered-check').prop('checked', false)
        $("#answered-check").append('<input type="checkbox" name="answered" id="answered-checkbox" "VisibleCheckbox">').append('<br/>');
      }
  };
}

function failFn1(jqXHR, textStatus, errorThrown){
  console.log(errorThrown);
}


  $.ajax({
    // url: 'localhost:7000/commonquestions',
    url: 'http://localhost:7000/commonquestions',
    type: 'GET',
    // data: commQuestion,
    datatype: 'json',
    // contentType: "application/json",
    crossDomain: true,
  }).done(successFn2)
    .fail(failFn2);


function successFn2(data){
  // console.log(data);
  for (var i = 0; i < data.length; ++i) {
      $("#comm-qtions").append(document.createTextNode(data[i].commonQuestion)).append('<br/>')

      // $("#voting-options").append('<input type="checkbox" name="vote-yes" id="voteyes-checkbox" value="Yes" "VisibleCheckbox">');
      $("#voting-options").append('<input type="button" name="vote-yes" class="vote-btn" id="voteyes-btn" value="Yes">');
      // $("#voting-options").append('<input type="checkbox" name="vote-no" id="voteno-checkbox" value="No" "VisibleCheckbox">').append('<br/>');
      $("#voting-options").append('<input type="button" name="vote-no" class="vote-btn" id="voteno-btn" value="No">').append('<br/>');
  };

}

function failFn2(jqXHR, textStatus, errorThrown){
  console.log(errorThrown);
}

  $('#but').on('click', function(){
  console.log("button clicked");

  data = {
    commonQuestion : $commonquestion.val()
  };
  commQuestion = JSON.stringify(data);

  $.ajax({
    // url: 'localhost:7000/commonquestions',
    url: 'http://localhost:7000/commonquestions',
    type: 'POST',
    data: commQuestion,
    datatype: 'json',
    contentType: "application/json",
    crossDomain: true,
  }).done(successFunction)
    .fail(failFunction);


function successFunction(data){
  console.log(data)

}

function failFunction(jqXHR, textStatus, errorThrown){
  console.log(errorThrown);
}
});
});
