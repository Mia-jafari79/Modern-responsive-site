// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 6, // تعداد اسلاید همزمان
//   spaceBetween: 30, // فاصله بین اسلایدها
//   loop: true, // لوپ بی‌نهایت

//   autoplay: {
//     delay: 500, // فاصله بین حرکت اتوماتیک
//     disableOnInteraction: false, // با drag متوقف نشود
//     reverseDirection: true, // حرکت از راست به چپ
//   },

//   grabCursor: true, // نشانگر دست هنگام drag
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     hide: true, //وقتی کاربر از آن استفاده نمی‌کند، مخفی باشد
//   },
// });

var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 20,
  speed: 7000,
  freeMode: true,
  freeModeMomentum: false,
  grabCursor: true,
  allowTouchMove: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: false, // حرکت اولی
  },
});

var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 20,
  speed: 7000,
  freeMode: true,
  freeModeMomentum: false,
  grabCursor: true,
  allowTouchMove: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true, // جهت مخالف
  },
});


