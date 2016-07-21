$(document).ready(function () {

    var script3Div = document.createElement('div');
    script3Div.classList.add('script3Div');
    script3Div.innerHTML = '<p>hello people, this is script3.js</p>';
    $('body').append(script3Div);

    script3Div.onclick = function () {
      $('.script3Div').hide('5000');
    };

  });
