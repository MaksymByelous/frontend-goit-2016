
var partnersList = [
    {
      name: "Brabley Hunter",
      massege: "based in Chicago. I love playing tennis and loud music.",
      fotoSrc: "img/partner4_foto.png",
      labelSrc: "img/partner4_label.png"
    },
    {
      name: "Lucas Marsha",
      massege: "I get my inspiration from nature and object around me. I have a passion to colours, typography and skateboards.",
      fotoSrc: "img/partner2_foto.png",
      labelSrc: "img/partner2_label.png"
    },
    {
      name: "Heather Walker",
      massege: "I'm a happy person that loves cats and climbing on mountains.",
      fotoSrc: "img/partner3_foto.png",
      labelSrc: "img/partner3_label.png"
    },
    {
      name: "Brabley Hunter",
      massege: "based in Chicago. I love playing tennis and loud music.",
      fotoSrc: "img/partner1_foto.png",
      labelSrc: "img/partner1_label.png"
    },
    {
      name: "Brabley Hunter",
      massege: "based in Chicago. I love playing tennis and loud music.",
      fotoSrc: "//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      labelSrc: "Beijing"
    },
    {
      name: "Brabley Hunter",
      massege: "based in Chicago. I love playing tennis and loud music.",
      fotoSrc: "img/partner1_foto.png",
      labelSrc: "img/partner1_label.png"
    },
    {
      name: "Brabley Hunter",
      massege: "based in Chicago. I love playing tennis and loud music.",
      fotoSrc: "img/partner1_foto.png",
      labelSrc: "img/partner1_label.png"
    }
  ];

$(document).ready(function () {

  $('#hide').hide();
//--------partners rendering with template
var partnersTemplate = $('#partners_template').html();
var partnersContent = _.template(partnersTemplate, {data: partnersList});
$('#partners').append(partnersContent);
$('div.partners__item:gt(3)').hide();
//-----show all / hide
$('#show_all_partners').on('click', function () {
  $('div.partners__item:gt(3)').show();
  $(this).hide();
  $('#hide').show();
});
$('#hide').on('click', function () {
  $('div.partners__item:gt(3)').hide();
  $(this).hide();
  $('#show_all_partners').show();
});

//--------Masonsy plugin
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

});
