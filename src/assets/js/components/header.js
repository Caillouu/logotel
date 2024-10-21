import Headroom from "headroom.js";
import $ from 'jquery'

window.$ = $;

var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init();

$('header nav ul a').on('click', function(e) {
  e.preventDefault()
  var id = $(this).attr('href')
  $('html, body').animate({
    scrollTop: $(id).offset().top + 10
  }, 600);
});

function onScroll(event) {
  var scrollPosition = $(document).scrollTop();
  $('header nav ul a').each(function() {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.outerHeight() > scrollPosition) {
      $('header nav ul liv a.active').removeClass('active');
      $(this).addClass('active');
    } else {
      currentLink.removeClass("active");
    }
  });
}

$(document).on("scroll", onScroll);
