'use strict';
$( function() {
  // alert('Hello! This page done with SASS on HTML5/CSS3. It is adaptive for desctop, tablet and mobile. It contains JQuery Plugin (slider), JQuery-UI widget (accordion), drop-down menu with JS, hover and click animation with easing (there are too many yellow trucks...try to click on it!). Project build with Grunt'
  // );

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
});
