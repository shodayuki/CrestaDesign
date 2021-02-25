$(function () {
  $('.header__burger-btn').on('click', function () {
    $('.header__nav').fadeToggle(300);
    $('.header__burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
  });

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    swipe: false,
    touchMove: false
  });

  $(window).on('scroll', function(){
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.jsc-fadeup').each(function(){
      const elemPos = $(this).offset().top;

      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass('scrollin');
      }
    });
  });
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

$(window).on('load', function () {
  $('.slick-slide').find('img').each(function () {
    $(this).addClass('is-active');
  });

  $('.jsc-fadein-text').each(function () {
    $(this).addClass('is-active');
  });
});