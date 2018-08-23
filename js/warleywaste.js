var markers = [];
var map;

function initMap() {
  var lat;
  var lng;
  var cp1 = new google.maps.LatLng(52.489471, -1.898575);
  var cp2;

  function DeleteMarkers() {
    //Loop through all the markers and remove
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
};

  document.getElementById("pcText")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("pcSubmit").click();
    }
  });


  document.getElementById("pcSubmit").addEventListener("click", function() {
    DeleteMarkers();
    console.log("////")

  var request = new XMLHttpRequest();
  request.open('GET', "https://maps.googleapis.com/maps/api/geocode/json?address="
  +document.getElementById("pcText").value
  +"&key=AIzaSyDpvA6bdNvjCxqBY31ThQmwqhM6_xa4O24", true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      lat = data.results[0].geometry.location.lat;
      lng = data.results[0].geometry.location.lng;
      cp2 = new google.maps.LatLng(lat, lng);
      console.log(google.maps.geometry.spherical.computeDistanceBetween (cp1, cp2));

      var closeHeight = document.querySelectorAll(".animateHeight");
      for (i =0; i < closeHeight.length; i++) {
        closeHeight[i].style.height = "0px";
      }

      if (google.maps.geometry.spherical.computeDistanceBetween (cp1, cp2) <= 15000) {

        var marker = new google.maps.Marker({
          position: data.results[0].geometry.location,
          map: map,
          title: 'Business Location'
        });
        markers.push(marker);



      document.getElementById("pcResultsYes").innerHTML = "Good news! "
      +document.getElementById("pcText").value.toString().toUpperCase()
      +" is in our area of service.  Please use the contact form below to get in touch."





      document.getElementById("pcResultsYes").style.height = "100%";

      document.getElementById


      }
      else {
        document.getElementById("pcResultsNo").style.height = "100%";
      }
    }

    else {
    }
  };

  request.onerror = function() {
  };

  request.send();
});


  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.489471, lng: -1.898575},
    zoom: 10
  });

  var areaCircle = new google.maps.Circle({
      strokeColor: '#4A80F5',
      strokeOpacity: 0.5,
      strokeWeight: 2,
      fillColor: '#4A80F5',
      fillOpacity: 0.2,
      map: map,
      center: map.center,
      radius: 15000
  });
}


$(document).ready(function() {

  //////VARS//////
  var link1 = document.getElementById("nv1");
  var link2 = document.getElementById("nv2");
  var link3 = document.getElementById("nv3");
  var link4 = document.getElementById("nv4");

  var home = document.getElementById("home");
  var serv = document.getElementById("serv");
  var about = document.getElementById("about");
  var contact = document.getElementById("contact");

  //////SCROLL ANIMATIONS//////
  link1.addEventListener("click", function() {
    console.log("click1");
    $("html, body").animate({
      scrollTop: $("#home").offset().top
    }, 1000);
  });
  link2.addEventListener("click", function() {
    console.log("click2");
    $("html, body").animate({
      scrollTop: $("#serv").offset().top + 2
    }, 1000);
  });
  link3.addEventListener("click", function() {
    console.log("click3");
    $("html, body").animate({
      scrollTop: $("#about").offset().top + 2
    }, 1000);
  });
  link4.addEventListener("click", function() {
    console.log("click4");
    $("html, body").animate({
      scrollTop: $("#contact").offset().top + 2
    }, 1000);
  });


  //////NAV HIGHLIGHTER//////
  window.addEventListener("scroll", function() {

    if (scrollY >= -20 && scrollY <= serv.offsetTop) {
      console.log("Home");
      document.getElementById("homeLink").style.cssText = "color:white !important;"
      link1.style.cssText = "background-color: #2bb4ff !important;"
      link2.style.cssText = "background-color: white !important";
      document.getElementById("servLink").style.cssText = "color:#313b3f !important;"
      link3.style.cssText = "background-color: white !important";
      document.getElementById("aboutLink").style.cssText = "color:#313b3f !important;"
      link4.style.cssText = "background-color: white !important";
      document.getElementById("contactLink").style.cssText = "color:#313b3f !important;"
    }

    else if (scrollY >= serv.offsetTop && scrollY < about.offsetTop) {
      console.log("Services");
      var elems = document.querySelector("#nv1");
      document.getElementById("servLink").style.cssText = "color:white !important;"
      link2.style.cssText = "background-color: #2bb4ff !important;"
      link1.style.cssText = "background-color: white !important";
      document.getElementById("homeLink").style.cssText = "color:#313b3f !important;"
      link3.style.cssText = "background-color: white !important";
      document.getElementById("aboutLink").style.cssText = "color:#313b3f !important;"
      link4.style.cssText = "background-color: white !important";
      document.getElementById("contactLink").style.cssText = "color:#313b3f !important;"
    }

    else if (scrollY >= about.offsetTop -500 && scrollY < contact.offsetTop) {
      console.log("About");
      document.getElementById("aboutLink").style.cssText = "color:white !important;"
      link3.style.cssText = "background-color: #2bb4ff !important;"

      link1.style.cssText = "background-color: white !important";
      document.getElementById("homeLink").style.cssText = "color:#313b3f !important;"
      link2.style.cssText = "background-color: white !important";
      document.getElementById("servLink").style.cssText = "color:#313b3f !important;"
      link4.style.cssText = "background-color: white !important";
      document.getElementById("contactLink").style.cssText = "color:#313b3f !important;"
    }

    else if (scrollY >= contact.offsetTop) {
      console.log("Contact");
      document.getElementById("contactLink").style.cssText = "color:white !important;"
      link4.style.cssText = "background-color: #2bb4ff !important;"

      link1.style.cssText = "background-color: white !important";
      document.getElementById("homeLink").style.cssText = "color:#313b3f !important;"
      link2.style.cssText = "background-color: white !important";
      document.getElementById("servLink").style.cssText = "color:#313b3f !important;"
      link3.style.cssText = "background-color: white !important";
      document.getElementById("aboutLink").style.cssText = "color:#313b3f !important;"
    }

  });

  /**ACCORDIAN FAQ BARS**/
  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");    

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    }
    else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
  }
});
