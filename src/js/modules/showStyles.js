const showStyles = (trigger, styles) => {
  const cards = document.querySelectorAll(styles),
    btn = document.querySelector(trigger);

    cards.forEach(item => {
          item.classList.add("animated", "fadeInUp");
      });

  btn.addEventListener("click", () => {
    btn.style.display = "none";
   
    cards.forEach((item) => {
      item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      
    });
  });
};

export default showStyles;
