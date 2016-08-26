'use strict';
$( function() {
  $('body').click(function () {
    alert('Hello! This page is done with SASS on HTML5/CSS3. It is adaptive for desktop, tablet and mobile screens. It contains JQuery Plugin (slider), JQuery-UI widget (accordion), drop-down menu with JS, hover and click animation with easing (there are too many yellow trucks...try to click on it!). Search field is alive, you may also try it. Lodash was used too - for news rendering. Project is built with Grunt.'
    );
    $(this).unbind('click');
  });
//-----news template
  var newsTemplate = $('#news-template').html();
  var newsContent = _.template( newsTemplate, { data: news} );
  $('#newsContainer').append(newsContent);
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
    },  800,
      "easeInBounce",
      function () {
        $(this).remove();
      }
    );
  });
//---------searsh on page------------
  $("#search-btn").click(function () {
    $('.light').toggleClass('light');
    var phrase = $('#text-to-find').val();
    if (phrase.length == 0) {
      alert('so what do you seach?');
      return;
    }
     $(":contains("+phrase+")").not(":has(:contains("+phrase+"))").each(function () {
        var that = $(this);
        var html = that.html();
        console.log(that);
        html = html.replace(new RegExp(phrase, 'gi'), '<span class="light">'+phrase+'</span>');
        that.html(html);
     });
     var found = $('span.light');
     if ( found.length == 0 ) {
       alert('Nothing found, sorry');
       return;
     }
     $('body').animate( { scrollTop: found.offset().top }, 1100 );
  });
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
