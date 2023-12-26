import hamburgerMenu from "./dom/01_menu_hamburguesa.js";
import { alarm, digitalClock } from "./dom/02_reloj.js";
import { moveBall, shortcuts } from "./dom/03_teclado.js";
import { countDown } from "./dom/04_cuenta_regresiva.js";
import { scrollTopBtn } from "./dom/05_boton_scroll.js";
import { darkTheme } from "./dom/06_tema_oscuro.js";
import { getGeolocation } from "./dom/07_geolocalizacion.js";
import { searchFilter } from "./dom/08_filtro_busquedas.js";
import { slider } from "./dom/09_carrusel.js";
import { scrollSpy } from "./dom/10_scroll_spy.js";

const doc = document;

doc.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown("count-down", "Dec 22, 2023 03:23:19", "Feliz cumpleaños a mi")
  scrollTopBtn(".scroll-top-btn")
  getGeolocation("geolocalizacion")
  searchFilter(".card-filter", ".card")
  slider()
  scrollSpy()
});

doc.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode")