$(function (){

  $('.header__call-btn').click( function(event){
      event.preventDefault();
      $('#overlay').fadeIn(297,	function(){
        $('#popup') 
        .css('display', 'block')
        .animate({opacity: 1}, 198);
      });
    });

    $('#close, #overlay').click( function(){
    $('#popup').animate({opacity: 0}, 198, function(){
        $(this).css('display', 'none');
        $('#overlay').fadeOut(297);
      });
    });


      $(window).scroll(function() {
        $('.odd').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+850) {
              $(this).addClass("fadeInLeft");
          }
      });
  });

        $(window).scroll(function() {
        $('.even').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+850) {
              $(this).addClass("fadeInRight");
          }
      });
  });

        $(window).scroll(function() {
        $('.about__content-discription').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+850) {
              $(this).addClass("fadeInLeft");
          }
      });
  });


        $(window).scroll(function() {
        $('.about-img').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+850) {
              $(this).addClass("fadeInRight");
          }
      });
  });


});






