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

  messages.forEach((message, index) => {
    setTimeout(() => {
      chatContainer.innerHTML += `
        <div class="chat__message">
          <p>${message}</p>
         ${currentTime()}
          ${tailChat}
        </div>`;

      if (index === messages.length - 1) {
        renderButtons(1, [
          { text: "Так", response: "Так" },
          { text: "Ні", response: "Ні" },
        ]);
      }
    }, index * 1000);
  });
}
// Рендер повідомлень після відповідей
function renderAnswer(message) {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.innerHTML += `<div class="chat__message">
  <p>${message}</p>
   ${currentTime()}
  ${tailChat}
  </div>`;
}

function renderMessage(message) {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.innerHTML += `<div class="chat__message">
  <p>${message}</p>
  ${currentTime()}
   ${tailChat}
  </div>`;
}

function renderButtons(step, buttons) {
  const chatContainer = document.getElementById("chatContainer");
  let buttonsHtml = `<div class="chat__button__wraper" id="step${step}">`;
  buttons.forEach((button) => {
    buttonsHtml += `<button class="chat__button" onclick="handleResponse('${button.response}', ${step})">${button.text}</button>`;
  });
  buttonsHtml += `</div>`;
  chatContainer.innerHTML += buttonsHtml;

  requestAnimationFrame(() => {
    document
      .getElementById(`step${step}`)
      .classList.add("chat__button__wraper--visible");
  });
}

function renderForm() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.innerHTML += `
    <form onsubmit="submitForm(event)">
      <input type="text" id="firstName" placeholder="Ім'я" required>
      <input type="text" id="lastName" placeholder="Прізвище" required>
      <input type="email" id="email" placeholder="Пошта" required>
      <input type="tel" id="phone" placeholder="Телефон" pattern="[0-9]*" inputmode="numeric" required>
      <button type="submit">Надіслати</button>
    </form>`;

  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function () {
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
  });
}
