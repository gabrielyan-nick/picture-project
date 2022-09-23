import { getData } from "../services/reqests";

const calcdb = () => {
  const sizeBlock = document.querySelector("#size"),
    materialBlock = document.querySelector("#material"),
    optionsBlock = document.querySelector("#options"),
    promoBlock = document.querySelector(".promocode"),
    resBlock = document.querySelector(".calc-price");

  let sum = 0,
    sizeBlockVal,
    materialBlockVal,
    optionsBlockVal;

  const calcFunc = () => {
    if (!optionsBlockVal) {
      sum = Math.round(+sizeBlockVal * +materialBlockVal);
    } else {
      sum = Math.round(+sizeBlockVal * +materialBlockVal + +optionsBlockVal);
    }

    if (!sizeBlockVal || !materialBlockVal) {
      resBlock.textContent = "Пожалуйста, выберите размер и материал картины.";
    } else if (promoBlock.value.trim() == "IWANTPOPART") {
      resBlock.textContent = Math.round(sum * 0.7);
    } else {
      resBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener("change", () => {
    getData("http://localhost:3000/sizes")
      .then((res) => {
        calcFunc();
        switch (sizeBlock.value) {
          case "none":
            sizeBlockVal = res[0]["none"];
            calcFunc();
            break;
          case "40x50":
            sizeBlockVal = res[0]["40x50"];
            calcFunc();
            break;
          case "50x70":
            sizeBlockVal = res[0]["50x70"];
            calcFunc();
            break;
          case "70x70":
            sizeBlockVal = res[0]["70x70"];
            calcFunc();
            break;
          case "70x100":
            sizeBlockVal = res[0]["70x100"];
            calcFunc();
            break;
        }
      })
      .catch((e) => {
        resBlock.textContent = "Упс... что-то пошло не так...";
      });
  });

  materialBlock.addEventListener("change", () => {
    getData("http://localhost:3000/materials")
      .then((res) => {
        calcFunc();
        switch (materialBlock.value) {
          case "none":
            materialBlockVal = res[0]["none"];
            calcFunc();
            break;
          case "fiber":
            materialBlockVal = res[0]["fiber"];
            calcFunc();
            break;
          case "lion":
            materialBlockVal = res[0]["lion"];
            calcFunc();
            break;
          case "cotton":
            materialBlockVal = res[0]["cotton"];
            calcFunc();
            break;
        }
      })
      .catch((e) => {
        resBlock.textContent = "Упс... что-то пошло не так...";
      });
  });

  optionsBlock.addEventListener("change", () => {
    getData("http://localhost:3000/options")
      .then((res) => {
        calcFunc();
        switch (optionsBlock.value) {
          case "none":
            optionsBlockVal = res[0]["none"];
            calcFunc();
            break;
          case "gel":
            optionsBlockVal = res[0]["gel"];
            calcFunc();
            break;
          case "express":
            optionsBlockVal = res[0]["express"];
            calcFunc();
            break;
          case "delivery":
            optionsBlockVal = res[0]["delivery"];
            calcFunc();
            break;
        }
      })
      .catch((e) => {
        resBlock.textContent = "Упс... что-то пошло не так...";
      });
  });

  promoBlock.addEventListener("input", calcFunc);
};
export default calcdb;
