'use strict';

$(document).ready(function () {

  $('form').submit(function(){
      var urlFull = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ encodeURIComponent(jQuery('#textField').val()) + '&callback=GoogleCallback&context=?';
      $.ajax({
          // AJAX-specified URL
         url: urlFull,
         dataType : "jsonp",
         // Handle the success event
         success: function (data, textStatus) {
           var ol = document.createElement("ol");
              // build results set
              $.each(data.results,
            function(i, val) {
              var li = document.createElement("li");
              li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;
              ol.appendChild(li);
            }
          );
      $('#results').html(ol);
      }
  });
      return false;
  });
});
function GoogleCallback (func, data) {
    window[func](data);
};



//   var string = '';
//   function googleSearch(e){
//           $.ajax({
//           url:'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+e+'&callback=GoogleCallback&context=?',
//           dataType: 'jsonp'
//   });
// };
//   $('input:button')[0].addEventListener('click', function(e){
//           e.preventDefault();
//           string =  $('input:text')[0].value;
//           googleSearch(string);
//           $('.search').remove();
//       });
//   $('input:text')[0].addEventListener('keydown', function(e){
//       if (e.keyCode == 13){
//           e.preventDefault();
//           string = $('input:text')[0].value;
//           googleSearch(string);
//           $('.search').remove();
//         };
//       });
