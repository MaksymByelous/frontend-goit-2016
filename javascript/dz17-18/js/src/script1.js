$(document).ready(function () {

  var script1Div = document.createElement('div');
  script1Div.classList.add('script1Div');
  script1Div.innerHTML = '<p>hello people, this is script1.js</p>';
  $('body').append(script1Div);
  
  script1Div.onclick = function () {
   $('.script1Div').hide('5000');
  };
});
