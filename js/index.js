$(function () {
    var mySwiper = new Swiper('#banner', {
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination'
    });
    var mySwiper2 = new Swiper('#banner2', {
        direction: 'vertical',
        loop: true
    });
    var lunbo = new Swiper('#lunbo', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2.1
    });

    $('.fenlei').on('touchstart', function () {
        $('.zhegai').addClass('chu');
        $('.tanchubox').css('left', '0');
    });

    $('.huiqu').on('touchstart', function () {
        $('.zhegai').delay(500).queue(function () {
            $('.zhegai').removeClass('chu').dequeue();
        });
        $('.tanchubox').css('left', '-3.4rem');
    })
    $(".mask").on("click", function () {
        $('.zhegai').delay(500).queue(function () {
            $('.zhegai').removeClass('chu').dequeue();
        });
        $('.tanchubox').css('left', '-3.4rem');
    })
    //顶部
    var bt = $('.banner-top');
    var lei = $('.lei-box');
    var top = lei.get(0).offsetTop;
    window.onscroll = function () {
        var stop = document.body.scrollTop || document.documentElement.scrollTop;
        if (stop > top) {
            bt.addClass('bianse');
        }
        if (stop < top) {
            bt.removeClass('bianse');
        }
    };

    // $(".tanchu-right").on("touchmove",function(e){
    //     var move=e.originalEvent.changedTouches[0].pageY
    //     $(this).css({top: 0.44 + move+"rem"})
    // })
    $(".tanchu-leftinner").eq(0).addClass("bianbai")
    $('.tanchu-left').on('touchstart', '.tanchu-leftinner', function () {
        $(this).closest('.tanchu-left').find('.tanchu-leftinner').removeClass('bianbai');
       $(".tanchu-leftinner").removeClass('bianbai');
        $(this).addClass('bianbai');
        $(".tanchu-right").siblings(".show").removeClass('show');
        $('.tanchu-right').eq($(this).index()).addClass('show');

    })


});