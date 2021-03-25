
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
$('[data-modal=thanks]').on('click', function() {
    $('.overlay, #thanks').fadeIn('slow');
});
$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow');
});
$('[data-modal=detail]').each(function(i) {
    $(this).on('click', function() {
        $('#detail .modal__subtitle').text($('.card__title').eq(i).text())
        $('.overlay, #detail').fadeIn('slow');
    })
})