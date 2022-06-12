import hamburgerMenu from "./menu_amburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shorcuts, moveBall } from "./teclado.js";
import countDown from "./cuenta_regresiva.js";
import scrollToButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

/* Cuando finaliza load */
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("/assets/media/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown("count-down", "December 10, 2023", "Peronchos, se van!!! ✌️");
  scrollToButton(".scroll-top-btn");
  darkTheme(".dark-theme-btn", "dark-mode");
});

d.addEventListener("keydown", (e) => {
  // d.addEventListener("keyup", (e) => {
  // d.addEventListener("keypress", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
});
