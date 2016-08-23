/* ---- Ajax calls for common questions ---- */
$(function (){

  var $url = "https://creds-oflo-server.herokuapp.com/",
      // url            = "http://localhost:7000/",;
      $commonquestion = $("#commquestion");

  $('#but').on('click', function(){

  data = {
    commonQuestion : $commonquestion.val()
  };
  commQuestion = JSON.stringify(data);

  var token = localStorage.ofloToken;

  $.ajax({
    // url: 'localhost:7000/commonquestions',
    url: $url + "commonquestions",
    type: 'POST',
    data: commQuestion,
    datatype: 'json',
    contentType: "application/json",
    Authorization: 'Bearer ' + token,
    crossDomain: true
  }).done(successFunction)
    .fail(failFunction);


function successFunction(data){
  alert("Successfully collated to common question");
  window.location.replace("/commonquestions");

}

function failFunction(jqXHR, textStatus, errorThrown){
console.log(errorThrown);
}
});
});
