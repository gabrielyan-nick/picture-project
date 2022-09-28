import { postData } from "../services/reqests";
import { changeFileInputContent } from "./forms";

const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');

  ["dragenter", "dragleave", "dragover", "drop"].forEach((event) => {
    fileInputs.forEach((item) => {
      item.addEventListener(event, preventDefaults);
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest(".file_upload").style.backgroundColor =
      "rgba(248, 121, 220, 0.493)";
  }

  function unHighlight(item) {
    item.closest(".file_upload").style.backgroundColor = "";
  }

  ["dragenter", "dragover"].forEach((event) => {
    fileInputs.forEach((item) => {
      item.addEventListener(event, () => highlight(item));
    });
  });

  ["dragleave", "drop"].forEach((event) => {
    fileInputs.forEach((item) => {
      item.addEventListener(event, () => unHighlight(item));
    });
  });

  fileInputs.forEach((item, i) => {
    item.addEventListener("drop", (e) => {
        item.files = e.dataTransfer.files;
        changeFileInputContent(e, item);
    });
  });

//   fileInputs[0].addEventListener('drop', (e) => {
//     fileInputs[0].files = e.dataTransfer.files;
//     const inputData = new FormData();
//     inputData.append('file', fileInputs[0].files[0]);
//     console.log(inputData);
//     // postData("assets/server.php", inputData)
//     //     .then(res => console.log(res))
//     //     .catch(res => console.log(res));
//   });
};

export default drop;
