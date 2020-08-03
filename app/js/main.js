$(function(){
    $('.product__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M9.21839 1L1 9L9.21839 17"/>\n' +
            '</svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.78161 17L9 9L0.78161 1"/>\n' +
            '</svg>\n</button>',
        infinite: false,
    });

    $('.questions__item-title').on('click', function() {
        if ($(this).parent().hasClass('questions__item--active')) {
            $('.questions__item').removeClass('questions__item--active');
        } else {
            $('.questions__item').removeClass('questions__item--active');
            $(this).parent().addClass('questions__item--active');
        }
    });

    // $(window).onscroll(function(){
    //     $('header').toggleClass('scroll');
    // });
});
