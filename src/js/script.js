// prettier-ignore
/* eslint-disable */
$(function() {
    $('.photo__slider').slick({
        prevArrow: '<button type="button" aria-label="prev" class="slick-prev"><img src="img/left-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" aria-label="next" class="slick-next"><img src="img/right-arrow.svg" alt=""></button>',
    });
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

})
/* eslint-enable */
