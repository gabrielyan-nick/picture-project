const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promoBlock = document.querySelector(promocode),
    resBlock = document.querySelector(result);

  let sum = 0;

  const calcFunc = () => {
    sum = Math.round(
      +sizeBlock.value * +materialBlock.value + +optionsBlock.value
    );

    if (sizeBlock.value == '' || materialBlock.value == '') {
        resBlock.textContent = 'Пожалуйста, выберите размер и материал картины.';
    } else if (promoBlock.value.trim() == 'IWANTPOPART') {
       resBlock.textContent = Math.round(sum * 0.7); 
    } else {
        resBlock.textContent = sum;
    }
  };

  function blockListener(block) {
    let e;

    switch (block.tagName) {
        case 'SELECT':
            e = 'change';
            break;
        case 'INPUT':
            e = 'input';
            break;
    }
    block.addEventListener(e, calcFunc);
  } 

  blockListener(sizeBlock);
  blockListener(materialBlock);
  blockListener(optionsBlock);
  blockListener(promoBlock);
};

export default calc;
