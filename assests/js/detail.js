const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var detail_img = $$(".detail__large__img_item");
var detail_arow = $$(".detail_arow");
detail_arow.forEach((element) => {
  element.onclick = () => {
    if (element.className == "detail_arow arrow__left") {
      $(".detail__img__list").classList.remove("transform");
    } else {
      $(".detail__img__list").classList.add("transform");
    }
  };
});

const subSlide = $$(".detail__img__list-item");
detail_img.forEach((item, index) => {
  const sub = subSlide[index];
  subSlide[index].onmouseover = (e) => {
    $(".detail__img__list-item.border").classList.remove("border");
    $(".detail__large__img_item.left0").classList.remove("left0");
    detail_img[index].classList.add("left0");
    subSlide[index].classList.add("border");
  };
});

const clolorpro = $$(".color__list__item");
clolorpro.forEach((item) => {
  item.onclick = () => {
    if ($(".color__list__item.active")) {
      $(".color__list__item.active").classList.remove("active");
    }
    item.classList.add("active");
  };
});
console.log(window.scrollY);

const sizepro = $$(".size__list__item");
sizepro.forEach((item) => {
  item.onclick = () => {
    if ($(".size__list__item.active")) {
      $(".size__list__item.active").classList.remove("active");
    }
    item.classList.add("active");
  };
});

let Quantityvalue = 1;
const Quantityinput = $(".Quantity__box__value");

const Quantity__boxbtn = $$(".Quantity__boxbtn");
Quantity__boxbtn.forEach((item) => {
  item.onclick = () => {
    if (item.className === "Quantity__box__minus Quantity__boxbtn") {
      Quantityvalue--;
      if (Quantityvalue <= 1) {
        Quantityvalue = 1;
      }
      Quantityinput.value = Quantityvalue;
    } else {
      Quantityvalue++;
      Quantityinput.value = Quantityvalue;
    }
  };
});

const cart = $(".button-buy");
cart.onclick = () => {
  window.location = "/cart.html";
};
