'use strict';
$( function() {

  $(document.querySelectorAll('img.hover-picture')).hide();
  $('img.face-picture').hover(
    function () {
      $(this).next('img.hover-picture').show();
    },
    function () {
      $(this).next('img.hover-picture').hide();
    }
  );
//-----acrivate akordeon plugin
  $( "#accordion" ).accordion();
//----open full text of article
  $( "a.articles-read-more" ).click(function (e) {
    e.preventDefault();
    $(this).prev('p').toggleClass('height100');
  });
//-------slide down main menu
  $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
  );
//-------li mousedown colorise
  $('.main-menu li').mousedown(
    function (e) {
      $(this).addClass('active');
      return false;
    }
  );
  $('.main-menu li').mouseup(
    function (e) {
      $(this).removeClass('active');
      return false;
    }
  );

});
