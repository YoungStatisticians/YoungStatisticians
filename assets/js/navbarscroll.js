(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navanimate").hide();
    $(".navanimate2").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 400) {
                //$('.navbar-fixed-top').fadeIn(100);
                $('.navanimate').slideDown(80);
                $(".navanimate2").fadeIn(250);
            } else {
                $('.navanimate').fadeOut(100);
                $(".navanimate2").fadeOut(100);

            }
        });
    });

});
  }(jQuery));
