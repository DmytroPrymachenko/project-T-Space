const tailChat = `
  <img 
    src="./src/images/svg/tailChat.svg"
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
  if (chatContainer) {
    messages.forEach((message, index) => {
      setTimeout(() => {
        const chatMessage = document.createElement("div");
        chatMessage.classList.add(
          "chat__message",
          "visible__off",
          "chat__message__text"
        );
        chatMessage.innerHTML = `
        <p>${message}</p>
        ${currentTime()}
        ${tailChat}
      `;
        chatContainer.appendChild(chatMessage);
        setTimeout(() => {
          chatMessage.classList.add("visible__on");
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
}
// Відповіді
function renderAnswer(message) {
  const chatContainer = document.querySelector(".chat__container");
  setTimeout(() => {
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("answer");
    chatMessage.innerHTML = `<div class="chat__message", "visible__off">
    <p>${message}</p>
    <div class="answer__time">${currentTime()}
    ${tailChat}</div>
  
    </div>
  `;
    chatContainer.appendChild(chatMessage);

    const innerChatMessage = chatMessage.querySelector(".chat__message");

    setTimeout(() => {
      innerChatMessage.classList.add("visible__on");
      scrollToBottom();
    }, 100);
  }, 100);
}
// Питання
function renderMessage(message) {
  const chatContainer = document.querySelector(".chat__container");
  setTimeout(() => {
    const chatMessage = document.createElement("div");
    chatMessage.classList.add(
      "chat__message",
      "visible__off",
      "chat__message__text"
    );
    chatMessage.innerHTML = `
    <p>${message}</p>
    ${currentTime()}
    ${tailChat}
  `;

    chatContainer.appendChild(chatMessage);

    setTimeout(() => {
      chatMessage.classList.add("visible__on");
      scrollToBottom();
    }, 100);
  }, 100);
}
// Кнопки
function renderButtons(step, buttons) {
  const chatContainer = document.getElementById("chatContainer");
  let buttonsHtml = `<div class="chat__button__wraper visible__off" id="step${step}">`;
  buttons.forEach((button) => {
    buttonsHtml += `<button class="chat__button animation__button" onclick="handleResponse('${button.response}', ${step})">${button.text}</button>`;
  });
  buttonsHtml += `</div>`;
  chatContainer.innerHTML += buttonsHtml;

  requestAnimationFrame(() => {
    const stepElement = document.getElementById(`step${step}`);
    setTimeout(() => {
      stepElement.classList.add("visible__on");
      scrollToBottom();
    }, 100);
  });
}
// Форма
function renderForm() {
  const chatContainer = document.getElementById("chatContainer");
  setTimeout(() => {
    const formHtml = `
    <form class="chat__form visible__off" onsubmit="submitForm(event)">
      <input class="chat__form__input" type="text" id="firstName" placeholder="Ім'я" required pattern=".{2,13}">
      <div id="firstNameError" class="error-message"></div>
      <input class="chat__form__input" type="text" id="lastName" placeholder="Прізвище" required pattern=".{2,13}">
      <div id="lastNameError" class="error-message"></div>
      <input class="chat__form__input" type="email" id="email" placeholder="Пошта" required>
      <div id="emailError" class="error-message"></div>
      <input class="chat__form__input" type="tel" id="phone" placeholder="Телефон" pattern="\+380[0-9]{9}" inputmode="numeric" required>
      <div id="phoneError" class="error-message"></div>
      <button class="chat__form__button animation__button" type="submit">Надіслати</button>
    </form>
  `;

    chatContainer.innerHTML += formHtml;

    const formElement = chatContainer.querySelector(".chat__form");

    formValidate();

    scrollToBottom();
    setTimeout(() => {
      formElement.classList.add("visible__on");
      scrollToBottom();
    }, 100);
  }, 100);
}
