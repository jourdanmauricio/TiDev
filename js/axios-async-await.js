(() => {
  const $axiosAsync = document.getElementById("axios-async");
  const $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      res.data.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.append($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message} `;
    } finally {
      console.log("Se ejecutará independiente de la promesa fetch");
    }
  }
  getData();
})();
