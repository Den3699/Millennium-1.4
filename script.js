const slaider = document.querySelectorAll('.card__slaider');
const openSlaiderButton = document.querySelector('.inform__button-none');
// const closeSlaiderButton = document.querySelector('.inform__button-none_close');

openSlaiderButton.addEventListener('click', function() {
    slaider.classList.add('inform__button-none_open');
    openSlaiderButton.classList.add('inform__button-none_close')
});

// closeSlaiderButton.addEventListener('click', function() {
//     slaider.classList.add('.inform__button-none_close');

// });
