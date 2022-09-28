const portfolioFilter = () => {
  const tabsParent = document.querySelector(".portfolio-menu"),
    tabs = tabsParent.querySelectorAll("li"),
    markAll = document.querySelectorAll(".portfolio-wrapper .all"),
    nonePhotoBlock = document.querySelector(".portfolio-no");

  const typeFilter = (markType) => {
    markAll.forEach((item) => {
      item.style.display = "none";
      item.classList.remove("animated", "fadeIn");
    });

    nonePhotoBlock.style.display = "none";
    nonePhotoBlock.classList.remove("animated", "fadeIn");

    if (markType) {
      markType.forEach((item) => {
        item.style.display = "block";
        item.classList.add("animated", "fadeIn");
      });
    } else {
      nonePhotoBlock.style.display = "block";
      nonePhotoBlock.classList.add("animated", "fadeIn");
    }
  };

  const addListener = () => {
    tabsParent.addEventListener("click", (e) => {
      tabs.forEach((item) => {
        item.classList.remove("active");
        if (item == e.target) {
          e.target.classList.add("active");
          let x;
          switch (item) {
            case tabsParent.querySelector(".all"):
              x = document.querySelectorAll(".portfolio-wrapper .all");
              break;
            case tabsParent.querySelector(".lovers"):
              x = document.querySelectorAll(".portfolio-wrapper .lovers");
              break;
            case tabsParent.querySelector(".guy"):
              x = document.querySelectorAll(".portfolio-wrapper .guy");
              break;
            case tabsParent.querySelector(".chef"):
              x = document.querySelectorAll(".portfolio-wrapper .chef");
              break;
            case tabsParent.querySelector(".girl"):
              x = document.querySelectorAll(".portfolio-wrapper .girl");
              break;
            case tabsParent.querySelector(".grandmother"):
              x = false;
              break;
            case tabsParent.querySelector(".granddad"):
              x = false;
              break;
          }
          typeFilter(x);
        }
      });
    });
  };

  addListener();
};

export default portfolioFilter;
