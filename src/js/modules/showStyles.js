import { getData } from "../services/reqests";

const showStyles = (trigger, selector) => {
  const btn = document.querySelector(trigger),
    wrapper = document.querySelector(selector);

  btn.addEventListener("click", () => {
    getData("http://localhost:3000/styles")
      .then((res) => {
        createCard(res);
        btn.style.display = "none";
      })
      .catch((e) => {
        btn.textContent = "Упс... что-то пошло не так...";
        setTimeout(() => (btn.textContent = "Посмотреть больше стилей"), 3000);
      });
  });

  function createCard(response) {
    response.forEach(({ src, title, link }) => {
      let card = document.createElement("div");
      card.classList.add(
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1",
        "animated",
        "fadeInUp"
      );
      card.innerHTML = `<div class=styles-block>
       					<img src=${src} alt>
       					<h4>${title}</h4>
       					<a href="${link}">Подробнее</a>
       				</div>`;
      wrapper.appendChild(card);
    });
  }
};

export default showStyles;
