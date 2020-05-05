jQuery(document).ready(function() {
// MDB Lightbox Init
    $(function () {
        $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });

    // Animation init
    new WOW().init();

    // Gallery
    $(function () {
      var selectedClass = "";
      $(".filter").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
        setTimeout(function () {
          $("." + selectedClass).fadeIn().addClass('animation');
          $("#gallery").fadeTo(300, 1);
        }, 300);
      });
    });

});

$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

// Animation init
new WOW().init();

// Gallery
$(function () {
var selectedClass = "";
$(".filter").click(function () {
  selectedClass = $(this).attr("data-rel");
  $("#gallery").fadeTo(100, 0.1);
  $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
  setTimeout(function () {
    $("." + selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
  }, 300);
});
});

function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Subject cannot be empty";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }
  document.getElementById('submitContactForm').click()
}


