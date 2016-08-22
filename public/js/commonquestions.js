/* ---- Ajax calls for common questions ---- */
$(function (){

  var url= "//localhost:7000";
  var $commonquestion = $("#commquestion");

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
