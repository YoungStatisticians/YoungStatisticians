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
      $("#signup").html('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSci4sOEXWt-DxBdpyVU-tUiyWU_F19iW5j0Wtk8abzT_6Z8PA/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>').fadeIn()
    }

});
  }(jQuery));
