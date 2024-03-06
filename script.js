const slaider = document.querySelectorAll(".card__slaider");
const slaiderButton = document.querySelector(".inform__button-arrow");

console.log(slaider);

slaiderButton.addEventListener("click", function () {
  slaider.forEach((el) => {
    el.classList.toggle("card__slider_test");
  });
  slaiderButton.classList.toggle("inform__button-arrow_close");
});
