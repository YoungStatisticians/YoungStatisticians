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

    $(".mailaddress").attr("href", "mailto:contact@youngstatisticians.nl")
    
    loadSignup = function(){
      $("#signup").html('<div class="col-md-8 col-md-offset-2 col-xs-12"> <div style="border-radius:20px; overflow: hidden;"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf0aQWeTsNk3EqUwGGASPOR2Hi9Mn5PLnYFJcdiWacO_rVrvA/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0" style="display:block; width:100%;" scrolling="no">Loading...</iframe></div></div>').fadeIn()
    }

});
  }(jQuery));
