const d = document;
const n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const success = (position) => {
    let coords = position.coords;
    $id.innerHTML = `
    <p>Tu posición actual es: </p>
    <ul>
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Presición: <b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://google.com/maps/@${coords.latitude},${coords.longitude}, 10z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
  };
  const error = (err) => {
    $id.innerHTML = `<p><mark>Geolocalización - Error ${err.code}: ${err.message}</mark></p>`;
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
