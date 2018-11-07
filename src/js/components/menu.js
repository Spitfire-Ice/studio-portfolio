$(function(){
    $('#nav').click(function() {
        $(this).toggleClass('open');
    });
});

//Fix menu position
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 1) {
        $('#menu').addClass('menu_fixed');
    } else {
        $('#menu').removeClass('menu_fixed');
    }
});
