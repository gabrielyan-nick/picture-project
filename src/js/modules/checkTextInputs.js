const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach((input) => {
    // input.addEventListener("keypress", (e) => {
    //   if (e.key.match(/[^а-яё 0-9]/gi)) {
    //     e.preventDefault();
    //   }
    // });

    input.addEventListener("input", (e) => {
      if (input.value.match(/[^а-яё 0-9]/gi)) {
        input.value = '';
      }
    });
  });
};

export default checkTextInputs;
