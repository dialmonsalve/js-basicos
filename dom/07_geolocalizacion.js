export function getGeolocation(id) {
  const geolocation = document.getElementById(id);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const success = (position) => {
    const { latitude, longitude, accuracy } = position.coords

    geolocation.innerHTML = `
    <p>Posición:</p>
    <ul>
      <li style="list-style: none;">Latitud: ${latitude}</li>
      <li style="list-style: none;">Longitud: ${longitude}</li>
      <li style="list-style: none;">Precisión: ${accuracy} ${accuracy > 1 ? "metros" : "metro"}</li>
    </ul>
    `
  };

  const error = (err) => {
    geolocation.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;
  };
  navigator.geolocation.getCurrentPosition(success, error, options);
}
