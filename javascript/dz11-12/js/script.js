$(document).ready(function () {

//----------carouselka
  var leftBtn = $('div.carousel-arrow-left');
  var rightBtn = $('div.carousel-arrow-right');
  var elementsList = $('ul.carousel-list');
  var pixelOffset = 490;
  var currentLeftValue = 0;
  var elementsCount = elementsList.find('li').length;
  var minimumOffset = - ((elementsCount - 2) * pixelOffset);
  var maximumOffset = 0;

  leftBtn.click(function () {
    if (currentLeftValue != maximumOffset) {
      currentLeftValue += 490;
      elementsList.animate({left : currentLeftValue + "px"}, 800);
      }
  });
  rightBtn.click(function () {
    if (currentLeftValue != minimumOffset) {
      currentLeftValue -= 490;
      elementsList.animate({left : currentLeftValue + "px"}, 800);
      }
  });
//-------finita del carousel

});
