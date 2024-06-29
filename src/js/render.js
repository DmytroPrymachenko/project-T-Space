const tailChat = `
  <img 
    src="./images/svg/tailChat.svg"
    alt="T-Space check"
    class="tail"
  />`;

document.addEventListener("DOMContentLoaded", () => {
  renderInitialMessages();
});

function renderInitialMessages() {
  const messages = [
    "Запускаємо курс з арбітражу трафіку! Отримайте цінні знання від експертів. Поглиблене вивчення сучасних стратегій.",
    "Приєднуйтесь до нашого нового курсу! Інтерактивні заняття, практичні завдання, сертифікат. Відмінна можливість підвищити кваліфікацію.",
    "Учасники отримають доступ до ексклюзивних матеріалів, консультацій та мережі контактів. Вивчайте нові тенденції арбітражу трафіку.",
    "Хочете дізнатися більше?",
  ];

  const chatContainer = document.getElementById("chatContainer");
  // Почакові повідомлення
  messages.forEach((message, index) => {
    setTimeout(() => {
      const chatMessage = document.createElement("div");
      chatMessage.classList.add("chat__message");
      chatMessage.innerHTML = `
        <p>${message}</p>
        ${currentTime()}
        ${tailChat}
      `;
      chatContainer.appendChild(chatMessage);
      setTimeout(() => {
        chatMessage.classList.add("visible");
      }, 100);

      if (index === messages.length - 1) {
        setTimeout(() => {
          renderButtons(1, [
            { text: "Так", response: "Так" },
            { text: "Ні", response: "Ні" },
          ]);
        }, 1000);
      }
    }, index * 1000);
  });
}
// Відповіді
function renderAnswer(message) {
  const chatContainer = document.getElementById("chatContainer");
  setTimeout(() => {
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("answer");
    chatMessage.innerHTML = `<div class="chat__message">
    <p>${message}</p>
    <div class="answer__time">${currentTime()}
    ${tailChat}</div>
  
    </div>
  `;
    chatContainer.appendChild(chatMessage);

    const innerChatMessage = chatMessage.querySelector(".chat__message");

    setTimeout(() => {
      innerChatMessage.classList.add("visible");
      scrollToBottom();
    }, 100);
  }, 100);
}
// Питання
function renderMessage(message) {
  const chatContainer = document.getElementById("chatContainer");
  setTimeout(() => {
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("chat__message");
    chatMessage.innerHTML = `
    <p>${message}</p>
    ${currentTime()}
    ${tailChat}
  `;

    chatContainer.appendChild(chatMessage);

    setTimeout(() => {
      chatMessage.classList.add("visible");
      scrollToBottom();
    }, 100);
  }, 100);
}
// Кнопки
function renderButtons(step, buttons) {
  const chatContainer = document.getElementById("chatContainer");
  let buttonsHtml = `<div class="chat__button__wraper" id="step${step}">`;
  buttons.forEach((button) => {
    buttonsHtml += `<button class="chat__button" onclick="handleResponse('${button.response}', ${step})">${button.text}</button>`;
  });
  buttonsHtml += `</div>`;
  chatContainer.innerHTML += buttonsHtml;

  requestAnimationFrame(() => {
    const stepElement = document.getElementById(`step${step}`);
    setTimeout(() => {
      stepElement.classList.add("chat__button__wraper--visible");
      scrollToBottom();
    }, 100);
  });
}
// Форма
function renderForm() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.innerHTML += `
    <form class="chat__form" onsubmit="submitForm(event)">
      <input class="chat__form__input" type="text" id="firstName" placeholder="Ім'я" required pattern=".{2,13}">
    <div id="firstNameError" class="error-message"></div>
<input class="chat__form__input" type="text" id="lastName" placeholder="Прізвище" required pattern=".{2,13}">
<div id="lastNameError" class="error-message"></div>
<input class="chat__form__input" type="email" id="email" placeholder="Пошта" required>
<div id="emailError" class="error-message"></div>
      <input class="chat__form__input" type="tel" id="phone" placeholder="Телефон" pattern="\+380[0-9]{9}" inputmode="numeric" required>
      <div id="phoneError" class="error-message"></div>
      <button class="chat__form__button" type="submit">Надіслати</button>
    </form>`;
  scrollToBottom();
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

function scrollToBottom() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
