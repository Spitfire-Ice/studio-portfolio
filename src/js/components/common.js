import './menu';
import 'slick-carousel';

$('.slick-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    //appendArrows: $('#slick_arrows'),'<span><i class="fas fa-arrow-circle-left fa-3x "></i></span>','<span><i class="fas fa-arrow-circle-right fa-3x "></i></span>',
    prevArrow: $('#slider_arrow_left'),
    nextArrow: $('#slider_arrow_right')
  });

  //Gallery filters
$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });
});
