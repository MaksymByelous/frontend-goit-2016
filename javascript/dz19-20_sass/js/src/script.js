$( function() {
  // alert('Hello! This page done with SASS on HTML5/CSS3. It contains JQuery Plugin (slider), JQuery-UI widget (accordion), drop-down menu with JS, hover and click animation (there are too many trucks...try to click on it!)'
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
//-------fast truck animation
  $('.fast-truck').on('click', function() {
    if ($('img', this).length < 2) {
    return;
    };
    $('img:last', this).animate({
      'margin-left': '+=50',
      opacity: 0,
      },  500,
      function () {
        $(this).remove();
      }
    );
  });
});
