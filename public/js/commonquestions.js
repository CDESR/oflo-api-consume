/* ---- Ajax calls for common questions ---- */
$(function() {
  var url = "https://creds-oflo-server.herokuapp.com/commonquestions/",
    // url            = "http://localhost:7000/",;
    $commonquestion = $("#commquestion");

  $.ajax({

      url: url,
      type: 'GET',
      datatype: 'json',
      crossDomain: true
    }).done(successFn1)
    .fail(failFn1);


  function successFn1(data) {
    for (var i = 0; i < data.length; ++i) {

      $("#common-questions").append(document.createTextNode(data[i].commonQuestion)).append('<br/>');

      var voteId = 'vbox-' + data[i]._id;
      var ansId = 'abox-' + data[i]._id;

      if (data[i].canVote === "true") {
        $("#canvote-check").append('<input class="canvote-box"  type="checkbox" name="canvote" id=' + voteId + ' checked "VisibleCheckbox">').append('<br/>');
      } else {
        $("#canvote-check").append('<input class="canvote-box" type="checkbox" name="canvote" id=' + voteId + ' "VisibleCheckbox">').append('<br/>');
      }


      if (data[i].answered === "true") {
        $("#answered-check").append('<input class="answered-box" type="checkbox" name="answered" id=' + ansId + ' checked "VisibleCheckbox">').append('<br/>');
      } else {
        $("#answered-check").append('<input class="answered-box" type="checkbox" name="answered" id=' + ansId + ' "VisibleCheckbox">').append('<br/>');
      }
    };
  }

  function failFn1(jqXHR, textStatus, errorThrown) {
    console.log(errorThrown);
  }


  $.ajax({

      url: url,
      type: 'GET',
      datatype: 'json',
      crossDomain: true,
    }).done(successFn2)
    .fail(failFn2);


  function successFn2(data) {

    for (var i = 0; i < data.length; ++i) {
      $("#comm-qtions").append(document.createTextNode(data[i].commonQuestion)).append('<br/>')

      var voteYesId = 'vtys-' + data[i]._id;
      var voteNoId = 'vtno-' + data[i]._id;

      $("#voting-options").append('<input type="button" name="vote-yes" class="vote-btn" id=' + voteYesId + ' value="Yes">');

      $("#voting-options").append('<input type="button" name="vote-no" class="vote-btn" id=' + voteNoId + ' value="No">').append('<br/>');
    };

  }

  function failFn2(jqXHR, textStatus, errorThrown) {
    console.log(errorThrown);
  }

  $('.list-names').on('click', '.canvote-box', function() {

    var commonquestion_id = this.id.slice(5);

    $url = 'url' + commonquestion_id;

    $.ajax({

        url: url + commonquestion_id,
        type: 'PUT',
        data: {
          "canVote": this.checked
        },
        datatype: 'json'
      }).done(successFunction)
      .fail(failFunction);


    function successFunction(canVote) {
      console.log("put : ", canVote);
    }

    function failFunction(jqXHR, textStatus, errorThrown) {
      // console.log(jqXHR);
      console.log(errorThrown);
    }
  });

  $('.list-names').on('click', '.answered-box', function() {
    console.log('clicked');
    console.log(this.id);

    var commonquestion_id = this.id.slice(5);
    console.log(commonquestion_id);

    $.ajax({

        url: url + commonquestion_id,
        type: 'PUT',
        data: {
          "answered": this.checked
        },
        datatype: 'json'
      }).done(successFunction)
      .fail(failFunction);


    function successFunction(data) {
      console.log(data)

    }

    function failFunction(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });

  $('.list-names').on('click', '.vote-btn', function() {
    // console.log('clicked');
    // console.log(this.id);

    var commonquestion_id = this.id.slice(5);
    // console.log(commonquestion_id);

    var voting = this.id.slice(0, 4);
    // console.log(voting);

    var user_id = localStorage.getItem('oflo_user');
    // console.log("current usr : " + user_id);

    if (voting === 'vtys') {
      // var $vote = '\"votedYes\"';

      // $url = 'http://localhost:7000/commonquestions/'+commonquestion_id+"/yes";
      $.ajax({

          url: url + commonquestion_id + "/yes",
          type: 'PUT',
          data: {
            "user": user_id
          },
          datatype: 'json'
        }).done(successFunction)
        .fail(failFunction);
    } else {
      // $vote = '\"votedNo\"';
      $url = url + commonquestion_id + "/no";
      $.ajax({

          url: url + commonquestion_id + "/no",
          type: 'PUT',
          data: {
            "user": user_id
          },
          datatype: 'json'
        }).done(successFunction)
        .fail(failFunction);
    };
    // console.log($vote);
    // console.log($url);



    // $.ajax({
    //
    //   url: $url,
    //   type: 'PUT',
    //   data: {$vote: user_id},
    //   datatype: 'json'
    // }).done(successFunction)
    //   .fail(failFunction);


    function successFunction(data) {
      alert("Successfully voted");

    }

    function failFunction(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });



  $('#but').on('click', function() {

    data = {
      commonQuestion: $commonquestion.val()
    };
    commQuestion = JSON.stringify(data);

    var token = localStorage.ofloToken;

    $.ajax({
        // url: 'localhost:7000/commonquestions',
        url: url,
        type: 'POST',
        data: commQuestion,
        datatype: 'json',
        contentType: "application/json",
        Authorization: 'Bearer ' + token,
        crossDomain: true
      }).done(successFunction)
      .fail(failFunction);


    function successFunction(data) {
      alert("Successfully collated to common question");
      window.location.replace("/commonquestions/show");

    }

    function failFunction(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
});
