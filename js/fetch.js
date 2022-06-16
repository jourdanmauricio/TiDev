(() => {
  const $fetch = document.getElementById("fetch");
  const $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.append($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${err.status}: ${message} `;
    })
    .finally(() =>
      console.log("Se ejecutará independiente de la promesa fetch")
    );
})();
