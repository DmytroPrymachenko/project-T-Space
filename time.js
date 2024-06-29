function renderTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minutes}`;

  const currentTimeElements = document.querySelectorAll(".currentTime");
  currentTimeElements.forEach((element) => {
    element.textContent = time;
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderTime();

  setInterval(renderTime, 1000);
});
