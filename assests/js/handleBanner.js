var slides = $$(".app__container-baner-img");
const arrow = $$(".banner_slide_arrow_button");

let currentSlide = 0;
let nextSlide = 0;

$("#slide0").style.left = 0;
arrow.forEach((element) => {
  element.onclick = () => {
    if (element.className == "arrow__left banner_slide_arrow_button") {
      preslide("app__container-baner-img", slides);
    } else {
      nextslide("app__container-baner-img", slides);
    }
  };
});

setInterval(() => {
  nextslide("app__container-baner-img", slides);
}, 5000);

function nextslide(classImg, elementImg) {
  if (currentSlide === elementImg.length - 1) {
    nextSlide = 0;
  } else {
    nextSlide = currentSlide + 1;
  }
  $("#slide" + currentSlide).style.left = 0;
  $("#slide" + nextSlide).style.left = "100%";
  $("#slide" + currentSlide).setAttribute("class", `${classImg}  slideOutLeft`);
  $("#slide" + nextSlide).setAttribute("class", ` ${classImg} slideInRight`);
  currentSlide = nextSlide;
}
function preslide(classimg, elementImg) {
  if (currentSlide === 0) {
    nextSlide = elementImg.length - 1;
  } else {
    nextSlide = currentSlide - 1;
  }
  $("#slide" + currentSlide).style.left = 0;
  $("#slide" + nextSlide).style.left = "-100%";
  $("#slide" + currentSlide).setAttribute(
    "class",
    `${classimg}  slideOutRight`
  );
  $("#slide" + nextSlide).setAttribute("class", ` ${classimg} slideInLeft`);
  currentSlide = nextSlide;
}
