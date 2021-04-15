
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// Slider
// const slide_left = document.querySelector('.arrow__left');
// const slide_right = document.querySelector('.arrow__right');
// let slides = document.querySelectorAll('.carusel__item');
//     let idx = 0; // Индекс текущего слайда.

// let index = 0;

// const activeSlide = n => {
//     for(slide of slides) {
//         slide.classList.remove('active');
//     }
//     slides[n].classList.add('active');
// }

// const nextSlide = () => {
//     if(index == slides.length - 1){
//         index = 0;
//         activeSlide(index);
//     } else {
//         index++;
//         activeSlide(index);
//     }
// }

// const prevSlide = () => {
//     if(index == 0){
//         index = slides.length - 1;
//         activeSlide(index);
//     } else {
//         index--;
//         activeSlide(index);
//     }
// }
// slide_left.addEventListener('click', prevSlide);
// slide_right.addEventListener('click', nextSlide);