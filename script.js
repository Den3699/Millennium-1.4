// const slaider = document.querySelectorAll('.card__slaider');
// const openSlaiderButton = document.querySelector('.inform__button-none');
// const closeSlaiderButton = document.querySelector('.inform__button-none_close');

// openSlaiderButton.addEventListener('click', function() {
//     slaider.classList.add('inform__button-none_open');
//     openSlaiderButton.classList.add('inform__button-none_close')
// });

// closeSlaiderButton.addEventListener('click', function() {
//     slaider.classList.add('.inform__button-none_close');

// });


// let informButtonNone = document.querySelector('.inform__button-none');
// if (informButtonNone.length > 0) {
//     for (let index = 0; index < informButtonNone.length; index++) {
//         const informButtonNone = informButtonNone[index];
//         informButtonNone.addEventListener('click', function (e) {
//             informButtonNone.parentElement.classList.toggle('_active');
//         });
//     }
// }


const slaider = document.querySelectorAll(".card__slaider");
const slaiderButton = document.querySelector(".inform__button-arrow");

console.log(slaider);

slaiderButton.addEventListener("click", function () {
  slaider.forEach((el) => {
    el.classList.toggle("card__slider_test");
  });
  slaiderButton.classList.toggle("inform__button-arrow_close");
});
