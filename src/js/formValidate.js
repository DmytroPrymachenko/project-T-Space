function formValidate() {
  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function () {
    phoneInput.value = phoneInput.value.replace(/[^\d+]/g, "");
  });

  phoneInput.addEventListener("focus", function () {
    if (!phoneInput.value.startsWith("+380")) {
      phoneInput.value = "+380";
    }
  });
  document.getElementById("firstName").addEventListener("input", function () {
    const firstName = document.getElementById("firstName");
    const firstNameError = document.getElementById("firstNameError");
    if (firstName.value.length < 2) {
      removeMessage(firstNameError);
      firstNameError.textContent = "Ім'я не може бути менше за 2 символів";
    } else if (firstName.value.length > 13) {
      removeMessage(firstNameError);
      firstNameError.textContent = "Ім'я не може бути більше 13 символів";
    } else {
      firstNameError.classList.add("message-true");
      firstNameError.textContent = "Ваше ім'я Супер";
    }
  });

  document.getElementById("lastName").addEventListener("input", function () {
    const lastName = document.getElementById("lastName");
    const lastNameError = document.getElementById("lastNameError");
    if (lastName.value.length < 2) {
      removeMessage(lastNameError);
      lastNameError.textContent = "Прізвище не може бути менше за 2 символів";
    } else if (lastName.value.length > 13) {
      removeMessage(lastNameError);
      lastNameError.textContent = "Прізвище не може бути більше 13 символів";
    } else {
      lastNameError.classList.add("message-true");
      lastNameError.textContent = "Ваше прізвище Супер";
    }
  });
  document.getElementById("email").addEventListener("input", function () {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!email.validity.valid) {
      removeMessage(emailError);
      emailError.textContent = "Введіть коректну адресу електронної пошти";
    } else {
      emailError.classList.add("message-true");
      emailError.textContent = "Почта ідеальна";
    }
  });

  document.getElementById("phone").addEventListener("input", function () {
    const phoneInput = document.getElementById("phone");
    let trimmedValue = phoneInput.value.trim();
    const phoneError = document.getElementById("phoneError");

    if (!trimmedValue.startsWith("+380")) {
      removeMessage(phoneError);
      phoneError.textContent = "Номер телефону має починатися з +380";
    } else if (trimmedValue.length !== 13) {
      removeMessage(phoneError);
      phoneError.textContent = "Номер телефону повинен складати 13 символів";
    } else {
      phoneInput.value = trimmedValue;
      phoneError.classList.add("message-true");
      phoneError.textContent = "Ваш номер телефону Супер";
    }
  });
}

function removeMessage(error) {
  error.classList.remove("message-true");
}
