export default function hamburgerMenu(panelBtn, panel, menuLink) {

  const doc = document;

  doc.addEventListener("click", e => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`) ) {
      doc.querySelector(panel).classList.toggle("is-active")
      doc.querySelector(panelBtn).classList.toggle("is-active")
    }

    if (e.target.matches(menuLink)) {
      doc.querySelector(panel).classList.remove("is-active")
      doc.querySelector(panelBtn).classList.remove("is-active")
    }
  })
  
}