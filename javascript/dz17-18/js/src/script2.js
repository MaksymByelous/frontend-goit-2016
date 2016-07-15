$(document).ready(function () {

    var script2Div = document.createElement('div');
    script2Div.classList.add('script2Div');
    script2Div.innerHTML = '<p>hello people, this is script2.js</p>';
    $('body').append(script2Div);

    script2Div.onclick = function () {
      $('.script2Div').hide('5000');
    };
  });
