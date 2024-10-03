// Observer

const serviceItems = document.querySelectorAll(".service__item");
const heroElements = document.querySelectorAll(".hero__info, .hero__poster");
const choiceVideo = document.querySelector(".choice__video");

const elementsToObserve = [...serviceItems, ...heroElements, choiceVideo];

const options = {
  threshold: 0.1,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, options);

elementsToObserve.forEach((item) => observer.observe(item));

// Slider

const swiper = new Swiper(".swiper", {
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        enabled: true,
      },
      navigation: {
        enabled: false,
      },
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        enabled: false,
      },
      navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
        enabled: true,
      },
    },
  },
});
