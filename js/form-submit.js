"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    // console.log(form);
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    // let stringObject = JSON.stringify(object);

    if (error === 0) {
      let response = await fetch("send_mail.php", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(object),
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
      } else {
        alert("Ошибка");
      }
    } else {
      alert("Заполните обязательные поля");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    // input.parentElement.classlist.add('_error')
    // input.classlist.add('_error')
    console.log("error");
  }
  function formRemoveError(input) {
    // input.parentElement.classlist.remove('_error')
    // input.classlist.remove('_error')
    console.log("good");
  }

  //функция теста email
  function emailTest(input) {
    return !/.+@.+\..+/.test(input.value);
  }
});
