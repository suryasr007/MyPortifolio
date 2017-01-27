// $('.dropdown').click(function(){
//   $('.dropdown').toggleClass("open");
// });
  
$(document).ready(function() {
  $('body').scrollspy({target: ".navbar", offset: 70}); // scroll spy for body
  $(".web_project_image").mouseenter(function() {
    $(this).animate({
      opacity: '0.5'
    }, "fast");
  });
  $(".web_project_image").mouseleave(function() {
    $(this).animate({
      opacity: '1'
    }, "fast");
  });
  $(document).on('click', '.navbar-collapse.in', function(e) {

    if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) {
      $(this).collapse('hide');
    }

  });

});