const scroll = (selector) => {
  const upArrow = document.querySelector(selector);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      upArrow.classList.add("animated", "fadeIn");
      upArrow.classList.remove("fadeOut");
    } else {
      upArrow.classList.remove("fadeIn");
      upArrow.classList.add("fadeOut");
    }
  });

  // Scrolling with requestAnimationFrame.

  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.2;

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let widthTop = Math.round(
          document.body.scrollTop || document.documentElement.scrollTop
        ),
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock);

            document.documentElement.scrollTo(0, r);
            
            if (r != widthTop + toBlock) {
                requestAnimationFrame(step);
            } else {
                location.hash = hash;
            }
      }
    });
  });

  // Pure JS scrolling.
  //   const element = document.documentElement,
  //     body = document.body;

  //   const calcScroll = () => {
  //     upArrow.addEventListener("click", function (e) {
  //       let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //       if (this.hash !== "") {
  //         e.preventDefault();
  //         let hashElem = document.querySelector(this.hash),
  //           hashElemTop = 0;

  //         while (hashElem.offsetParent) {
  //           hashElemTop += hashElem.offsetTop;
  //           hashElem = hashElem.offsetParent;
  //         }

  //         hashElemTop = Math.round(hashElemTop);
  //         smoothScroll(scrollTop, hashElemTop, this.hash);
  //       }
  //     });
  //   };

  //   calcScroll();

  //   const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1,
  //       prevScrollTop,
  //       speed;

  //     if (to > from) {
  //       speed = 30;
  //     } else {
  //       speed = -30;
  //     }

  //     let move = setInterval(function () {
  //       let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //       if (
  //         prevScrollTop === scrollTop ||
  //         (to > from && scrollTop >= to) ||
  //         (to < from && scrollTop <= to)
  //       ) {
  //         clearInterval(move);
  //         history.replaceState(
  //           history.state,
  //           document.title,
  //           location.href.replace(/#.*$/g, "") + hash
  //         );
  //       } else {
  //         body.scrollTop += speed;
  //         element.scrollTop += speed;
  //         prevScrollTop = scrollTop;
  //       }
  //     }, timeInterval);
  //   };
};

export default scroll;
