// import checkNumInputs from "./checkNumInputs";

const forms = () => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    textArea = document.querySelectorAll("textarea"),
    upload = document.querySelectorAll('[name="upload"]');

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так..",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png",
  };

  const path = {
    designer: "assets/server.php",
    question: "assets/question.php",
  };

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  const clearForm = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
    textArea.forEach((item) => {
      item.value = "";
    });

    document.querySelectorAll(".file_upload div").forEach((item) => {   // Восстанавливаем кнопку загрузки фото.
      item.style.display = "block";
    });

    document.querySelectorAll(".file_upload button").forEach((item) => {
      item.style.width = "120px";
      item.textContent = "Загрузить фотографию";
    });
  };

  upload.forEach((item) => {
    // Блок загрузки фото.
    item.addEventListener("input", () => {
      let dots;
      const arr = item.files[0].name.split(".");   // Массив из имени файла. 

      arr[0].length > 20 ? (dots = "...") : (dots = ".");
      const name =
        arr[0].substring(0, 20) +
        dots +
        arr[1];

      document.querySelectorAll(".file_upload div").forEach((item) => {
        item.style.display = "none";
      });

      document.querySelectorAll(".file_upload button").forEach((item) => {
        item.style.width = "100%";
        item.classList.add("animated", "toWide");
        item.textContent = name;
      });

      document.addEventListener("click", () => {
        // Убираем анимацию кнопки.
        document.querySelectorAll(".file_upload button").forEach((item) => {
          item.classList.remove("toWide");
        });
      });
    });
  });

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.parentNode.appendChild(statusMessage);
      item.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        item.style.display = "none";
      }, 300);

      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      statusMessage.appendChild(statusImg);

      let textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      const formData = new FormData(item);
      // const json = JSON.stringify(Object.fromEntries(formData.entries()));
      let api; // Cервер для отправки данных.

      item.closest(".popup-design") || item.classList.contains("calc-form")
        ? (api = path.designer)
        : (api = path.question);
      console.log(api);

      postData(api, formData)
        .then((data) => {
          console.log(data);
          statusImg.setAttribute("src", message.ok);
          textMessage.textContent = message.success;
        })
        .catch((data) => {
          console.log(data);
          statusImg.setAttribute("src", message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearForm();
          setTimeout(() => {
            statusMessage.remove();
            item.classList.remove("fadeOutUp");
            item.classList.add("fadeInUp");
            item.style.display = "block";
          }, 4000);
        });
    });
  });
};

export default forms;
