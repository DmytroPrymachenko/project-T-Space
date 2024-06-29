function renderMessage(message) {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minutes}`;

  const chatContainer = document.getElementById("chatContainer");
  chatContainer.innerHTML += `<div class="chat__message"><p>${message}</p><span>${time}</span></div>`;
}

function renderButtons(step, buttons) {
  const chatContainer = document.getElementById("chatContainer");
  let buttonsHtml = `<div class="chat__button__wraper" id="step${step}">`;
  buttons.forEach((button) => {
    buttonsHtml += `<button class="chat__button" onclick="handleResponse('${button.response}', ${step})">${button.text}</button>`;
  });
  buttonsHtml += `</div>`;
  chatContainer.innerHTML += buttonsHtml;
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
  phoneInput.addEventListener("input", function (event) {
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
  });
}
