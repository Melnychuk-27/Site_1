
// Burger 
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}
const menuLinks = document.querySelectorAll('.menu__link[href]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", () => {
            if(iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
        });
    });
}

$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


// Modal

const btn__calls = document.querySelectorAll('.btn__call');
const btn__promo = document.querySelector('.btn__promo');
const btns__send = document.querySelectorAll('.btn__send');
const consultation = document.querySelector('#consultation');
const thanks = document.querySelector('#thanks');
const overlay = document.querySelector('.overlay');
const modal__closes = document.querySelectorAll('.modal__close');
const detail = document.querySelector('#detail');
const сalculation = document.querySelector('#сalculation');


if (modal__closes.length > 0) {
    modal__closes.forEach(modal__close => {
        modal__close.addEventListener("click", () => {
            overlay.style.display = "none";
            consultation.style.display = "none";
            thanks.style.display = "none";
            detail.style.display = "none";
            сalculation.style.display = "none";
        });
    });
}

// if (btns__send.length > 0) {
//     btns__send.forEach(btn__send => {
//         btn__send.addEventListener("click", () => {
//             thanks.style.display = "block";
//             detail.style.display = "none";
//             consultation.style.display = "none";
//             сalculation.style.display = "none";
//             overlay.style.display = "block";
//         });
//     });
// }

if (btn__calls.length > 0) {
    btn__calls.forEach(btn__call => {
        btn__call.addEventListener("click", () => {
            сalculation.style.display = "none";
            thanks.style.display = "none";
            detail.style.display = "none";
            consultation.style.display = "block";
            overlay.style.display = "block";
        });
    });
}

btn__promo.addEventListener("click", () => {
    thanks.style.display = "none";
    detail.style.display = "none";
    consultation.style.display = "none";
    сalculation.style.display = "block";
    overlay.style.display = "block";
    
});


document.querySelector(".question__form").addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();

    let el = document.querySelector(".question__form");
    
    let name = document.forms["question__form"]["name"].value;
    let tell = document.forms["question__form"]["tell"].value;
    let email = document.forms["question__form"]["email"].value;
    let fail = "";

    if(name == "" || tell == "" || email == "")
        {fail = "Заполните все поля";}
    else if(name.length <=1 || name.length > 30)
        {fail = "Введите корректно имя";}
    else if(email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0) {
        fail = "Заполните email корректно";
    }

    if(fail != ""){
        // document.querySelector("#error").innerHTML = fail;
        alert(fail);
        console.log('w');
        
    } else {
        // alert("Все данние корректно заповнени");
        console.log('q');
        return 2;}
     
}
const qw = checkForm;
console.log(qw);
   

// Slider
const slide_left = document.querySelector('.arrow__left');
const slide_right = document.querySelector('.arrow__right');
let slides = document.querySelectorAll('.carusel__item');
    let idx = 0; // Индекс текущего слайда.

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}
slide_left.addEventListener('click', prevSlide);
slide_right.addEventListener('click', nextSlide);


// $('[data-modal=thanks]').on('click', function() {
//     $('.overlay, #thanks').fadeIn('slow');
// });
// $('[data-modal=consultation]').on('click', function() {
//     $('.overlay, #consultation').fadeIn('slow');
// });
// $('.modal__close').on('click', function() {
//     $('.overlay, #consultation, #thanks').fadeOut('slow');
// });
// $('[data-modal=detail]').each(function(i) {
//     $(this).on('click', function() {
//         $('#detail .modal__subtitle').text($('.card__title').eq(i).text())
//         $('.overlay, #detail').fadeIn('slow');
//     })
// })