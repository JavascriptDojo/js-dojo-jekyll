function initMap() {
  var cheltPark = {lat: 51.8749, lng: -2.0538};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: cheltPark
  });
  var marker = new google.maps.Marker({
    position: cheltPark,
    map: map
  });
}
