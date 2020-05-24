$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.section').toggleClass('section-active') && $('.gray').toggleClass('gray-active');
  });

  $('.menu-btn-active').on('click', function(e) {
    e.preventDefault();
    $('.section').toggleClass('section-active') && $('.gray').toggleClass('gray-active');
  });
  

  $('.div-links a').on('click', function(e) {
    e.preventDefault();
    $('.section').toggleClass('section-active') && $('.gray').toggleClass('gray-active');
  });
  

