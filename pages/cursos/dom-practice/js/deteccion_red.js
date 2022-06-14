const d = document;
const w = window;
const n = navigator;

export default function networkStatus() {
  const isOnLine = () => {
    const $div = d.createElement("div");
    if (n.onLine) {
      $div.textContent = "Conexión reestablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Conexión perdida";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }
    d.body.insertAdjacentElement("afterbegin", $div);

    setTimeout(() => {
      d.body.removeChild($div);
    }, 2000);
  };
  // Verifica conexión en el navegaodr
  // console.log(n.onLine); // true
  // Detectamos el evento de cambio
  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());
}
