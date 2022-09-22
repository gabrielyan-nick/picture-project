const mask = (selector) => {
  const inputs = document.querySelectorAll(selector);

  const setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      // Ручной полифил.
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();

      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = "+3 (___) ___ __ __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });

    if (event.type === "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
    input.addEventListener("click", function () {
      // Делаем невозможным позиционирование каретки на первух двух символах.
      if (this.selectionStart === 0 || this.selectionStart === 1) {
        this.setSelectionRange(this.value.length, this.value.length);
      }
    });
    input.addEventListener("keydown", (e) => {
      if (e.code === "ArrowLeft") {
        if (input.selectionStart === 1 || input.selectionStart === 2) {
          input.setSelectionRange(2, 2);
        }
      }
    });
  });
};

export default mask;
