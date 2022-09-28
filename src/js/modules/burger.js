const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
    burgerBtn = document.querySelector(burgerSelector);

  menuElem.style.display = "none";

  burgerBtn.addEventListener("click", (e) => {
   
      if (menuElem.style.display == "none") {
        menuElem.style.display = "block";
      } else {
        menuElem.style.display = "none";
      }

  });

  window.addEventListener("resize", () => {
    if (window.screen.availWidth >= 992) {
      menuElem.style.display = "none";
    }
  });

};
export default burger;
