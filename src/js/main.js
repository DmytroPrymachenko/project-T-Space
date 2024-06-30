const userData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  timeCommitment: "",
  interestInArbitrage: "",
};

let currentStep = 1;

function setWithDelay(callback, delay) {
  setTimeout(callback, delay);
}

function handleResponse(response, step) {
  if (step < currentStep) {
    return;
  }

  if (currentStep === 1) {
    if (response === "Ні") {
      setWithDelay(() => renderAnswer(response), 100);
      setWithDelay(
        () =>
          renderMessage("Дякую за вашу відповідь, чекаємо на ваше повернення"),
        1000
      );

      return;
    }
  }

  currentStep++;

  if (currentStep === 2) {
    setWithDelay(() => renderAnswer(response), 100);
    setWithDelay(
      () =>
        renderMessage("Чи був у вас досвід пов'язаний із Арбітражем трафіку?"),
      1000
    );
    setWithDelay(
      () =>
        renderButtons(2, [
          { text: "Так", response: "Так" },
          { text: "Ні", response: "Ні" },
          { text: "Чув про це", response: "Чув про це" },
        ]),
      2000
    );
  }

  if (currentStep === 3) {
    userData.interestInArbitrage = response;
    setWithDelay(() => renderAnswer(response), 100);
    setWithDelay(
      () => renderMessage("Скільки часу ви могли б приділяти на день?"),
      1000
    );
    setWithDelay(
      () =>
        renderButtons(3, [
          { text: "Одна година", response: "Одна година" },
          { text: "2-3 години", response: "2-3 години" },
          { text: "5 і більше", response: "5 і більше" },
        ]),
      2000
    );
  }

  if (currentStep === 4) {
    userData.timeCommitment = response;
    setWithDelay(() => renderAnswer(response), 100);
    setWithDelay(
      () =>
        renderMessage(
          "Дякую! Наша компанія дуже зацікавлена ​​вами, для подальшої підтримки зв'язку, будь ласка, заповніть форму."
        ),
      1000
    );
    setWithDelay(() => renderForm(), 2000);
  }
}

function submitForm(event) {
  event.preventDefault();

  userData.firstName = document.getElementById("firstName").value;
  userData.lastName = document.getElementById("lastName").value;
  userData.email = document.getElementById("email").value;
  userData.phone = document.getElementById("phone").value;

  console.log(userData);
  localStorage.setItem("userData", JSON.stringify(userData));
  window.location.href = "./src/pages/success/success.html";
}

function scrollToBottom() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
