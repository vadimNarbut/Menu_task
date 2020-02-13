$(document).on('click', '.multi-accordion li > i', function (event) {
  var $this = $(this),
    $next = $this.next();

  if ($next.length) {
    if ($next.is(':visible')) {
      $next.slideToggle(function () {
        $next.find('ul').toggle(false);
      });
    } else {
      $next.slideToggle().parent().siblings().find('ul').filter(':visible').slideToggle();
    }

    event.preventDefault();
  }
});

$('.container').on('click', function () {
  var menu = $('.qwe');
  var back = $('.back');


  if (back.css('opacity') === '0') {
    back.css({
      'opacity': '0.5'
    });
  } else
  {
    back.css({
      'opacity': '0'
    });
  }

  if (menu.css('opacity') === '0') {
    menu.css({
      'opacity': '1'
    });
  } else
  {
    menu.css({
      'opacity': '0'
    });
  }
});