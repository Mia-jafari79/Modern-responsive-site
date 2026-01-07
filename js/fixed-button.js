// const scrollTopBtn = document.querySelector(".scroll-top");
// const backBtn = document.querySelector(".back-btn");
// const scrollPercentText = document.getElementById("scrollPercent");
// const progressCircle = document.querySelector(".progress-dot");

// const radius = 24;
// const circumference = 2 * Math.PI * radius;
// const TOTAL_DOTS = 16;
// const DOT_SIZE = 2.5;
// const GAP_SIZE = circumference / TOTAL_DOTS - DOT_SIZE;

// progressCircle.style.strokeDasharray = `0 ${circumference}`;
// progressCircle.style.strokeDashoffset = 0;

// const sections = Array.from(document.querySelectorAll("section[id]"));

// window.addEventListener("scroll", () => {
//   const scrollTop = window.scrollY;
//   const docHeight = document.documentElement.scrollHeight - window.innerHeight;

//   const percent = Math.min(scrollTop / docHeight, 1);
//   scrollPercentText.textContent = Math.round(percent * 100) + "%";

//   scrollTopBtn.style.display = scrollTop > 100 ? "flex" : "none";

//   const visibleDots = Math.round(percent * TOTAL_DOTS);
//   const visibleLength = visibleDots * (DOT_SIZE + GAP_SIZE);
//   progressCircle.style.strokeDasharray = `${visibleLength} ${circumference}`;
// });

// function getCurrentSectionIndex() {
//   const scrollPosition = window.scrollY + window.innerHeight / 2;

//   return sections.findIndex((section) => {
//     const top = section.offsetTop;
//     const bottom = top + section.offsetHeight;
//     return scrollPosition >= top && scrollPosition < bottom;
//   });
// }

// // 🔼 سکشن قبلی
// scrollTopBtn.addEventListener("click", () => {
//   const currentIndex = getCurrentSectionIndex();
//   if (currentIndex > 0) {
//     sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
//   }
// });

// // 🔽 سکشن بعدی
// backBtn.addEventListener("click", () => {
//   const currentIndex = getCurrentSectionIndex();
//   if (currentIndex < sections.length - 1) {
//     sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
//   }
// });
const scrollTopBtn = document.querySelector(".scroll-top");
const backBtn = document.querySelector(".back-btn");
const scrollPercentText = document.getElementById("scrollPercent");
const progressCircle = document.querySelector(".progress-dot");

const radius = 24;
const circumference = 2 * Math.PI * radius;
const TOTAL_DOTS = 16;
const DOT_SIZE = 2.5;
const GAP_SIZE = circumference / TOTAL_DOTS - DOT_SIZE;

// مقدار اولیه دایره
progressCircle.style.strokeDasharray = `0 ${circumference}`;
progressCircle.style.strokeDashoffset = 0;

// تمام سکشن‌ها + فوتر به عنوان آخرین سکشن
const sections = Array.from(
  document.querySelectorAll("section[id], footer[id]")
);

// محاسبه درصد و نمایش دایره
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const percent = Math.min(scrollTop / docHeight, 1);
  scrollPercentText.textContent = Math.round(percent * 100) + "%";

  // نمایش دکمه بالا بعد از 100px اسکرول
  scrollTopBtn.style.display = scrollTop > 100 ? "flex" : "none";

  // دایره progress
  const visibleDots = Math.round(percent * TOTAL_DOTS);
  const visibleLength = visibleDots * (DOT_SIZE + GAP_SIZE);
  progressCircle.style.strokeDasharray = `${visibleLength} ${circumference}`;
});

// پیدا کردن سکشن فعلی بر اساس وسط viewport
function getCurrentSectionIndex() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  return sections.findIndex((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    return scrollPosition >= top && scrollPosition < bottom;
  });
}

// 🔼 دکمه بالا → سکشن قبلی یا بالای صفحه
scrollTopBtn.addEventListener("click", () => {
  const currentIndex = getCurrentSectionIndex();

  if (currentIndex > 0) {
    sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// 🔽 دکمه پایین → سکشن بعدی یا فوتر
backBtn.addEventListener("click", () => {
  const currentIndex = getCurrentSectionIndex();

  if (currentIndex < sections.length - 1) {
    sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
  }
});
