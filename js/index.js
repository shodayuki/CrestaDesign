$(function(){
  $(".header__hamburgerIcon").click(function() {
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $(".header__hamburgerWrap").addClass("is-active");
    } else {
      $(".header__hamburgerWrap").removeClass("is-active");
    }
  });
});