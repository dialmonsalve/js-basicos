export function darkTheme(btnSelector, classDark) {
  const themeBtn = document.querySelector(btnSelector);

  const selectors = document.querySelectorAll("[data-dark]");
  const moon = "🌙";
  const sun = "☀️";

  const lightMode = () => {
    selectors.forEach((selector) => selector.classList.remove(classDark));
    themeBtn.textContent = moon;
    localStorage.setItem("theme", "light")
  };
  
  const darkMode = () => {
    selectors.forEach((selector) => selector.classList.add(classDark));
    themeBtn.textContent = sun;
    localStorage.setItem("theme", "dark")
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(btnSelector)) {
      if (themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light")

    if (localStorage.getItem("theme")==="light") {
      lightMode()
      return
    }
    if (localStorage.getItem("theme") === "dark") {
      darkMode()
      return
    }
  });
}
