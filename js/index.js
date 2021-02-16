$(function(){
  $('.header__burger-btn').on('click', function () {
    $('.header__nav').fadeToggle(300);
    $('.header__burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
  });
});