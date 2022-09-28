const accordeon = (trigers) => {
  const headers = document.querySelectorAll(trigers);

  headers.forEach((item) => {
    item.addEventListener("click", function () {
      if (!this.classList.contains("acc-active")) {
        hide();
        this.classList.add("acc-active");
        this.nextElementSibling.classList.add("active-content");

        if (this.classList.contains("acc-active")) {
          this.nextElementSibling.style.maxHeight =
            this.nextElementSibling.scrollHeight + 80 + "px";
        } else {
          this.nextElementSibling.style.maxHeight = "0px";
        }
      } else {
        hide();
      }
    });
  });

  function hide() {
    headers.forEach((item) => {
      item.classList.remove("acc-active");
      item.nextElementSibling.classList.remove("active-content");
      item.nextElementSibling.style.maxHeight = "0px";
    });
  }

  // hide();

  // contentBlocks.forEach((item) => {
  //   item.classList.add("animated", "fadeInDown");
  // });

  // headers.forEach((item) => {
  //   item.addEventListener("click", function () {
  //     if (this.nextElementSibling.style.display === "block") {
  //       hide();
  //     } else {
  //       hide();
  //       this.classList.add("acc-active");
  //       this.nextElementSibling.style.display = "block";
  //     }

  //   });
  // });
};
export default accordeon;
