
$( function() {

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





/* сделать увеличение артикл по высоте при клике на ридмор,
  и также сворачивание
*/
