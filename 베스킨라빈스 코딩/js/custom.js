$(function () {

    $('.icecream_slide').slick({
        arrows: false,
        dots: true,
    });









    $('.main_promotion_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });







    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

})