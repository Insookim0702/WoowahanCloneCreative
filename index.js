(() => {
  const BUTTON_3 = document.querySelector(".button_3");
  const F_CONTENT = document.querySelector(".fcontent");
  function init() {
    F_CONTENT.style.display = "none";
    BUTTON_3.addEventListener("click", () => {
      if (F_CONTENT.style.display === "none") {
        F_CONTENT.style.display = "flex";
      } else {
        F_CONTENT.style.display = "none";
      }
    });
  }

  init();
})();
