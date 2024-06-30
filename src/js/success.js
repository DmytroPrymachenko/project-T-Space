const tailSuccess = `
  `;

function renderSuccessMessages() {
  const dataString = localStorage.getItem("userData");
  const data = JSON.parse(dataString);
  console.log(data);

  let interviewString = "";
  const interview = data?.interestInArbitrage;
  if (interview === "Так") {
    interviewString = "Відмінно, що у вас є досвід в арбітражі трафіку!";
  } else if (interview === "Ні") {
    interviewString =
      "Не хвилюйтеся, навіть без досвіду ви можете успішно розпочати арбітраж трафіку!";
  } else {
    interviewString = "Дуже круто, що ви зацікавлені в арбітражі трафіку!";
  }

  let timeCommitmentString = "";
  const timeCommitment = data?.timeCommitment;
  if (timeCommitment === "Одна година") {
    timeCommitmentString =
      "Одна година на день - непоганий початок! Варто дізнатися більше!.";
  } else if (timeCommitment === "2-3 години") {
    timeCommitmentString =
      "2-3 години на день - це відмінний час для поглиблення ваших знань в арбітражі трафіку.";
  } else if (timeCommitment === "5 і більше") {
    timeCommitmentString =
      "5 і більше годин на день - це дуже серйозний підхід! Ви зможете досягти великих результатів.";
  }

  const messages = [
    `Привіт ${data?.firstName} ${data?.lastName}!`,
    `${interviewString}`,
    `${timeCommitmentString}`,
    `Дякую! Наш менеджер обов'язково зв'яжеться з вами найближчим часом!`,
    `Ми зв'яжемося з Вами за електронною поштою ${data?.email} або телефоном ${data?.phone}.`,
    `Успіхів в досягненні нових висот!`,
  ];
  console.log(messages);

  const successContainer = document.getElementById("successContainer");
  if (successContainer) {
    messages.forEach((message, index) => {
      setTimeout(() => {
        const chatMessage = document.createElement("div");
        chatMessage.classList.add("chat__message");
        chatMessage.innerHTML = `
        <p>${message}</p>
        ${currentTime()}
        ${tailSuccess}
      `;
        successContainer.appendChild(chatMessage);
        setTimeout(() => {
          chatMessage.classList.add("visible");
        }, 100);
      }, index * 1000);
    });
  }
}

document.addEventListener("DOMContentLoaded", renderSuccessMessages);

document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.getElementById("backButton");

  backButton.addEventListener("click", function () {
    window.location.href = "/";
  });
});
