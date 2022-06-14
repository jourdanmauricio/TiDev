import hamburgerMenu from "./menu_amburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shorcuts, moveBall } from "./teclado.js";
import countDown from "./cuenta_regresiva.js";
import scrollToButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busqueda.js";

const d = document;

/* Cuando finaliza load */
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("/assets/media/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown("count-down", "December 10, 2023", "Peronchos, se van!!! ✌️");
  scrollToButton(".scroll-top-btn");
  // responsiveMedia(
  //   "youtube",
  //   "(min-width: 1024px)",
  //   `<a href="https://www.youtube.com/embed/ymrnENDEmWw" target="_blank" rel="noopener noreferrer">Ver video</a>`,
  //   `<iframe width="560" height="315" src="https://www.youtube.com/embed/ymrnENDEmWw" title="YouTube video player"
  //   frameborder="0"
  //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //   allowfullscreen></iframe>`
  // );
  // responsiveMedia(
  //   "gmaps",
  //   "(min-width: 1024px)",
  //   `<a href="https://goo.gl/maps/iEoFBc6PCMga4Syr8" target="_blank" rel="noopener noreferrer">Ver mapa</a>`,
  //   `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6083053871116!2d-58.43239758524317!3d-34.58877638046327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb588f4af5d17%3A0x560fe6ff3f099abf!2sPlaza%20Serrano!5e0!3m2!1ses-419!2sar!4v1655094825871!5m2!1ses-419!2sar"
  //     width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  // );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
});

d.addEventListener("keydown", (e) => {
  // d.addEventListener("keyup", (e) => {
  // d.addEventListener("keypress", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
