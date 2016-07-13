$(document).ready(function() {
  $('input').focus(function() {
    if($(this).closest('.search_container').hasClass('search_container_hover')) {
      $(this).closest('.search_container').removeClass('search_container_hover');
    }
    $(this).closest('.search_container').addClass('highlight');
  });

  $('input').blur(function() {
    $(this).closest('.search_container').removeClass('highlight');
  });

  $('.search_container').mouseenter(function() {
    if(!$('.search_container').hasClass('highlight')) {
      $(this).addClass('search_container_hover');
    }
  });
  $('.search_container').mouseleave(function() {
    if(!$('.search_container').hasClass('highlight')) {
      $(this).removeClass('search_container_hover');
    }
  });

});
