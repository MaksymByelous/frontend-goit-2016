'use strict';
$( function() {

//----jssocials plugin activate
  $("#share").jsSocials({
    showCount: true,
    showLabel: true,
    shares: ["twitter", "facebook", "googleplus", "linkedin"]
  });
//------search plugin
  var search = $('input.search').searchMeme({ onSearch: function (searchText) {
                setTimeout(function () {
                    search.searchMeme({ searchComplete: true });
                    alert('Search completed.');
                }, 3000);
            }
            , buttonPlacement: 'left', button: 'red'
  });
//----jcarousel plugin activate
$('.jcarousel').jcarousel({
animation: 'slow'
});


});
