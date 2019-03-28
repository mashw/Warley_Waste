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

  // ===========================================================================
  // SUBMIT BUTTON VALIDATION
  // ===========================================================================
  const validateForm = () => {
    preventDefault();
    var checkBox = document.getElementById("confirm").checked;
    var submitButton = document.getElementById("sub-button");
    if (checkBox != true) {
      alert("TICKETYTICK");
      return false;      
    }
    else {
      return true;
    }
  }

});
