
$( function() {
  $( "#accordion" ).accordion();


    $( "a.articles-read-more" ).click(function (e) {
      e.preventDefault();
      $(this).prev('p').toggleClass('height100');
    });

});





/* сделать увеличение артикл по высоте при клике на ридмор,
  и также сворачивание
*/
