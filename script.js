// const slaider = document.querySelectorAll(".card__slaider");
// const slaiderButton = document.querySelector(".inform__button-arrow");

// console.log(slaider);

// slaiderButton.addEventListener("click", function () {
//   slaider.forEach((el) => {
//     el.classList.toggle("card__slider_test");
//   });
//   slaiderButton.classList.toggle("inform__button-arrow_close");
// });



let card = document.querySelectorAll('.card');
let slaiderButton = document.querySelector('.inform__button-arrow');

slaiderButton.addEventListener('click', function () {
  card.forEach(card =>
    card.classList.toggle('card__slaider'));

    slaiderButton.classList.toggle('inform__button-arrow_close');

}); 

new Swiper('.swiper',{
  pagination: {
    el: '.swiper-pagination',
  }
});
