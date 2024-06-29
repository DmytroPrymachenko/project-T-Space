const userData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  timeCommitment: "",
  interestInArbitrage: "",
};

let currentStep = 1;

function handleResponse(response, step) {
  if (step < currentStep) {
    return;
  }

  if (currentStep === 1) {
    if (response === "Ні") {
      renderAnswer(response);
      renderMessage("Дякую за вашу відповідь, чекаємо на ваше повернення");
      return;
    }
  }

  currentStep++;

  if (currentStep === 2) {
    renderAnswer(response);
    renderMessage("Чи був у вас досвід пов'язаний із Арбітражем трафіку?");
    renderButtons(2, [
      { text: "Так", response: "Так" },
      { text: "Ні", response: "Ні" },
      { text: "Чув про це", response: "Чув про це" },
    ]);
  }

  if (currentStep === 3) {
    userData.interestInArbitrage = response;
    renderAnswer(response);
    renderMessage("Скільки часу ви могли б приділяти на день?");
    renderButtons(3, [
      { text: "Одна година", response: "Одна година" },
      { text: "2-3 години", response: "2-3 години" },
      { text: "5 і більше", response: "5 і більше" },
    ]);
  }

  if (currentStep === 4) {
    userData.timeCommitment = response;
    renderAnswer(response);
    renderMessage(
      "Дякую! Наша компанія дуже зацікавлена ​​вами, для подальшої підтримки зв'язку, будь ласка, заповніть форму."
    );
    renderForm();
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
  window.location.href = "./success/success.html";
}
