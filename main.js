const clickLi = document.querySelectorAll(".content__items");
const navbar = document.querySelector(".content__navigation");
const extendUl = document.querySelectorAll(".extend__content");

//add active cho navbar item
clickLi.forEach((items, index) => {
  const extendUls = extendUl[index];
  items.addEventListener("click", function () {
    clickLi.forEach((item) => item.classList.remove("content__items--active"));
    extendUl.forEach((item) =>
      item.classList.remove("extend__content--active")
    );
    this.classList.add("content__items--active");
    extendUls.classList.add("extend__content--active");
  });
});

//scroll thì position fixed
window.addEventListener("scroll", function (e) {
  const scrolled = window.scrollY;
  if (scrolled >= 360) {
    navbar.setAttribute(
      "style",
      "position: fixed; top: 0; width: 163.32px; margin-top: 30px; transition: all 0.2s ease;border-radius: 30px"
    );
  } else {
    navbar.setAttribute(
      "style",
      "position: static; margin-top: 0px; transition: all 0.2s ease;"
    );
  }
});

//slider
$(document).ready(function () {
  $(".slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});

// load hình ảnh source lazy-src

function loadImage(img) {
  const url = img.getAttribute("lazy-src");
  img.setAttribute("src", url);
}

function ready() {
  if ("IntersectionObserver" in window) {
    var srcImgs = document.querySelectorAll("[lazy-src]");
    let observer = new IntersectionObserver(function (entries) {
      entries.forEach((image) => {
        if (image.isIntersecting) {
          loadImage(image.target);
        }
      });
    });

    srcImgs.forEach(function (item) {
      observer.observe(item);
    });
  }
}

document.addEventListener("DOMContentLoaded", ready());
