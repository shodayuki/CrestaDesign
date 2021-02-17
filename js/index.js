$(function () {
  $('.header__burger-btn').on('click', function () {
    $('.header__nav').fadeToggle(300);
    $('.header__burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
  });

  const $fv = $('.fv');
  const $header = $('.header');
  const $fvHeight = $fv.outerHeight();

  $(window).on('load scroll', function () {
    const value = $(this).scrollTop();

    if ($(window).width() > 768) {
      if (value > $fvHeight) {
        $header.addClass('is-fixed');
      } else {
        $header.removeClass('is-fixed');
      }
    }
  });

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });
});