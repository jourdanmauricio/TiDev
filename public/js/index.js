import scrollToButton from "./boton_scroll.js";
import contactForm from "./contact_form.js";

const d = document;

/* Cuando finaliza load */
d.addEventListener("DOMContentLoaded", (e) => {
  scrollToButton(".scroll-top-btn");
  contactForm();
});
