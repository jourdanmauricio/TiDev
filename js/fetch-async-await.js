(() => {
  const $fetchAsync = document.getElementById("fetch-async");
  const $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.append($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message} `;
    } finally {
      console.log("Se ejecutará independiente de la promesa fetch");
    }
  }

  getData();
})();
