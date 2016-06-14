$(document).ready(function () {
  $(".tabs-title-link").click(function () {
    $(this).parent().siblings("li").removeClass("active");
    $(this).parent().addClass("active");
    var tabsContentId = $(this).attr("href");
    $(tabsContentId).siblings("div").removeClass("active");
    $(tabsContentId).addClass("active");
  });

  $('.input-group p').hide();
  $(':text').mouseover(function () {
    $(this).siblings('p').fadeIn('slow');
    $(':text').mouseout(function () {
      $(this).siblings('p').fadeOut();
    });
    // return false;
  });
  $('.btn-help').click(function () {
    $('.input-group p').fadeIn('slow');
  });
});
