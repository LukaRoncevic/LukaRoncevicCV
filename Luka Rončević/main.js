let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {

  mainNav.classList.toggle('active');

});

$(function () {

  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/laptop1.jpeg",
    "images/mob.jpeg",
    "images/sony.jpeg",
  ];

  var i = 0;

  setInterval(function() {
    i = (i + 1) % images.length; 
    galleryImage.fadeOut(function() {
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });
  }, 3000);

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("myBtn").style.display = "block";
  } else {
      document.getElementById("myBtn").style.display = "none";
  }

}

function topFunction() {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}
$(document).ready(function(){

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
  
});