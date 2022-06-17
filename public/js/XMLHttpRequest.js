(() => {
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById("xhr");
  const $fragment = document.createDocumentFragment();
  xhr.addEventListener("readystatechange", (e) => {
    // Solo procesamos cuando la solicitud termine
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.responseText);
      // Parseamos la respuesta a un objeto json javascript
      let json = JSON.parse(xhr.responseText);
      // recorremos la respuesta
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.append($li);
      });
      $xhr.appendChild($fragment);
    } else {
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message} `;
    }
  });
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
})();
