const doc = document;

export function scrollTopBtn(selectorBtn) {
  const scrollBtn = doc.querySelector(selectorBtn);

  window.addEventListener("scroll", (e) => {
    const scrollTop = window.scrollY || doc.documentElement.scrollTop;

    if (scrollTop > 600) {
      scrollBtn.classList.remove("hidden")
      return
    }
    scrollBtn.classList.add("hidden")

  });

  doc.addEventListener("click", (e) => {
    if (e.target.matches(selectorBtn)) {
      window.scrollTo({
        behavior: "smooth",
        top:0
      })
    }
  });
}
