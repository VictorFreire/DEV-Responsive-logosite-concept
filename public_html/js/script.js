$('.flip').on('click', function() {
  $('.flip').stop().addClass('active, focus');
});

$('.close').on('click', function() {
  $('.flip').stop().removeClass('active, focus');
});