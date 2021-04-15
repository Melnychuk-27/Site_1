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

// const modal__form = document.querySelector('.modal__form').addEventListener(
//     // 'click', stopDefAction, false
// );;

// function stopDefAction(evt) {
//     evt.preventDefault();
// }

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

overlay.addEventListener("click", (e) => {
    if(e.target.classList.contains('overlay')){
    thanks.style.display = "none";
    detail.style.display = "none";
    consultation.style.display = "none";
    сalculation.style.display = "none";
    overlay.style.display = "none";
    }
});

