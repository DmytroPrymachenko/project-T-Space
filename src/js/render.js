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
      <input class="chat__form__input" type="text" id="firstName" placeholder="Ім'я" required>
      <input class="chat__form__input" type="text" id="lastName" placeholder="Прізвище" required>
      <input class="chat__form__input" type="email" id="email" placeholder="Пошта" required>
      <input class="chat__form__input" type="tel" id="phone" placeholder="Телефон" pattern="[0-9]*" inputmode="numeric" required>
      <button class="chat__form__input" type="submit">Надіслати</button>
    </form>`;
  scrollToBottom();
  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function () {
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
  });
}
function scrollToBottom() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
