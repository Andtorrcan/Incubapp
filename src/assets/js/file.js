jQuery('document').ready(function($) {

    var subir = $('.back-to-top');

    subir.click(function(e) {
        console.log('scroll');
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    subir.hide();

    $(window).scroll(function() {

        if ($(this).scrollTop() > 200) {
            subir.fadeIn();
        } else {
            subir.fadeOut();
        }

    });

});