

$.when($.ajax({
    url: "https://api.meetup.com/JavaScript-Dojo-Cheltenham?photo-host=public&sig_id=195859323&sig=5073c9258b8676366f6f50520dfdfcb24970dd08",
    dataType: 'jsonp'
  }))
  .then(function(obj){
    $('#groupTitle').html(obj.data.name);
    $('#groupLogo').prepend("<img src='"+obj.data.group_photo.thumb_link+"' />");
    $('#groupDescription').html(obj.data.description);



  }, function(xhr, status, error){
    console.log(xhr.status + "-" + error);
  });

  $.when($.ajax({
      url: "https://api.meetup.com/JavaScript-Dojo-Cheltenham/events?photo-host=public&sig_id=195859323&sig=2a6137630fa9df39e6a72ca0b277234f64d1f5d8",
      dataType: 'jsonp'
    }))
    .then(function(obj){
      $("#meetup1").html(prettyDate(new Date(obj.data["0"].time)));
      $("#meetup2").html(prettyDate(new Date(obj.data["1"].time)));
      $("#meetup3").html(prettyDate(new Date(obj.data["2"].time)));

    }, function(xhr, status, error){
      console.log(xhr.status + "-" + error);
    });

    function prettyDate(pdate)
    {
      return pdate.toString().split(":").slice(0,2).join(":");
    }
