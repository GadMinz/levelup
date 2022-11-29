let buttons = document.getElementsByClassName("my-btn");

const scrollToElement = (e) => {
  let element = document.getElementById("order");
  element.scrollIntoView(true);
};

for (const btn of buttons) {
  btn.addEventListener("click", scrollToElement);
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 15,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
