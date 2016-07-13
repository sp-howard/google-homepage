$(document).ready(function() {
  $('input').focus(function() {
    if($(this).closest('.search').hasClass('search-hover')) {
      $(this).closest('.search').removeClass('search-hover');
    }
    $(this).closest('.search').addClass('highlight');
  });

  $('input').blur(function() {
    $(this).closest('.search').removeClass('highlight');
  });

  $('.search').mouseenter(function() {
    if(!$('.search').hasClass('highlight')) {
      $(this).addClass('search-hover');
    }
  });
  $('.search').mouseleave(function() {
    if(!$('.search').hasClass('highlight')) {
      $(this).removeClass('search-hover');
    }
  });

});
