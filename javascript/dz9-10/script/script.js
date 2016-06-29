$(document).ready(function () {


    $('.jcarousel').jcarousel({
    animation: 'slow'
    });
    $('.jcarousel').jcarousel({
    animation: {
        duration: 800,
        easing:   'linear',
        complete: function() {
        }
    }
  });

  (function($) {
    // This is the connector function.
    // It connects one item from the navigation carousel to one item from the
    // stage carousel.
    // The default behaviour is, to connect items with the same index from both
    // carousels. This might _not_ work with circular carousels!
    var connector = function(itemNavigation, carouselStage) {
        return carouselStage.jcarousel('items').eq(itemNavigation.index());
    };

    $(function() {
        // Setup the carousels. Adjust the options for both carousels here.
        var carouselStage      = $('.carousel-stage').jcarousel();
        var carouselNavigation = $('.carousel-navigation').jcarousel();

        // We loop through the items of the navigation carousel and set it up
        // as a control for an item from the stage carousel.
        carouselNavigation.jcarousel('items').each(function() {
            var item = $(this);

            // This is where we actually connect to items.
            var target = connector(item, carouselStage);

            item
                .on('jcarouselcontrol:active', function() {
                    carouselNavigation.jcarousel('scrollIntoView', this);
                    item.addClass('active');
                })
                .on('jcarouselcontrol:inactive', function() {
                    item.removeClass('active');
                })
                .jcarouselControl({
                    target: target,
                    carousel: carouselStage
                });
        });

        // Setup controls for the stage carousel
        $('.prev-stage')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.next-stage')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        // Setup controls for the navigation carousel
        $('.prev-navigation')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.next-navigation')
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    });
})(jQuery);

// -----------   Nice selector
  $('select').niceSelect();

// ------------JQuery checkbox
(function($) {
jQuery(".niceCheck").each(
/* при загрузке страницы меняем обычные на стильные checkbox */
function() {
     changeCheckStart(jQuery(this));
});
function changeCheck(el)
/*
	функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, который отвечает за новый вид)
	el - span контейнер для обычного чекбокса
	input - чекбокс
*/
{
	var el = el,
		input = el.find("input").eq(0);

	if(el.attr("class").indexOf("niceCheckDisabled")==-1)
	{
   		if(!input.attr("checked")) {
			el.addClass("niceChecked");
			input.attr("checked", true);
		} else {
			el.removeClass("niceChecked");
			input.attr("checked", false).focus();
		}
	}
    return true;
}

function changeVisualCheck(input)
{
/*
	меняем вид чекбокса при смене значения
*/
var wrapInput = input.parent();
	if(!input.attr("checked")) {
		wrapInput.removeClass("niceChecked");
	}
	else
	{
		wrapInput.addClass("niceChecked");
	}
}

function changeCheckStart(el)
/*
	новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
	новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
*/
{
try
{
var el = el,
	checkName = el.attr("name"),
	checkId = el.attr("id"),
	checkChecked = el.attr("checked"),
	checkDisabled = el.attr("disabled"),
	checkTab = el.attr("tabindex"),
    checkValue = el.attr("value");
	if(checkChecked)
		el.after("<span class='niceCheck niceChecked'>"+
			"<input type='checkbox'"+
			"name='"+checkName+"'"+
			"id='"+checkId+"'"+
			"checked='"+checkChecked+"'"+
            "value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");
	else
		el.after("<span class='niceCheck'>"+
			"<input type='checkbox'"+
			"name='"+checkName+"'"+
			"id='"+checkId+"'"+
             "value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");

	/* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */
	if(checkDisabled)
	{
		el.next().addClass("niceCheckDisabled");
		el.next().find("input").eq(0).attr("disabled","disabled");
	}
	/* цепляем обработчики стилизированным checkbox */
	el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
	el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
	if(jQuery.browser.msie)
	{
		el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });
	}
	el.remove();
}
catch(e)
{
	// если ошибка, ничего не делаем
}
    return true;
}
})(jQuery);

  $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(300)
            .animate({opacity:0.8},500);
          },
        function(){
            $(this).children('.sub-menu').slideUp(300)
            .animate({opacity:1},200);
        }
    );

  $( '.sub-menu' ).hover(
    function () {
      $(this).animate({backgroundColor:"rgb(255,255,255)"}, 200 );
    },
    function () {
      $(this).animate({backgroundColor:"yellow"}, 200 );
    }
    );


});
