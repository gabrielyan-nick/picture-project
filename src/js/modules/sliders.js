const sliders = (slides, dir, prev, next) => {
  let sliderIndex = 1,
    paused = false;
  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {    // Круговая прокрутка.
      sliderIndex = 1;
    }

    if (n < 1) {
      sliderIndex = items.length;
    }

    items.forEach((item) => {
      item.classList.add("animated");
      item.style.display = "none";
    });

    items[sliderIndex - 1].style.display = "block";
  }

  showSlides(sliderIndex);

  function changeSlides(n) {
    showSlides((sliderIndex += n));
  }

  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);

    prevBtn.addEventListener("click", () => {
      changeSlides(-1);
      items[sliderIndex - 1].classList.remove("slideInLeft");
      items[sliderIndex - 1].classList.add("slideInRight");
    });

    nextBtn.addEventListener("click", () => {
      changeSlides(1);
      items[sliderIndex - 1].classList.remove("slideInRight");
      items[sliderIndex - 1].classList.add("slideInLeft");
    });
  } catch (e) {}

  function activateAnimation() {
    if (dir === "vertical") {
      paused = setInterval(() => {
        changeSlides(1);
        items.forEach((item) => {
          item.classList.add("slideInLeft");
        });
      }, 5000);
    } else {
      paused = setInterval(() => {
        changeSlides(1);
        items[sliderIndex - 1].classList.remove("slideInRight");
        items[sliderIndex - 1].classList.add("slideInLeft");
      }, 7000);
    }
  }

  activateAnimation();

  items[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });

  items[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });
};

export default sliders;
