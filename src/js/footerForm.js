document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("footerForm");
  const input = document.getElementById("footerInput");
  let messages = [];
  const ansverMessages = [
    "Дякуємо за ваше повідомлення! Ми передамо його нашому менеджеру, який зв'яжеться з вами найближчим часом.",
    "Поки ми очікуємо зв'язку менеджера, пропонуємо продовжити наше спілкування",
  ];

  if (form && input) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      handleSubmit();
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit();
      }
    });

    function handleSubmit() {
      const message = input.value.trim();
      if (message) {
        renderAnswer(message);

        setTimeout(() => {
          ansverMessages.forEach((msg, index) => {
            setTimeout(() => {
              renderMessage(msg);
            }, (index + 1) * 500);
          });
        }, 500);

        messages.push(message);

        userData.clientMessage = messages;

        input.value = "";
      }
    }
  } else {
    console.error("Form or input element not found.");
  }
});
