const d = document;

export default function countDown(id, limitDate, finalMessage) {
  const $countDown = d.getElementById(id);
  const countDownDate = new Date(limitDate).getTime();

  let countDownTempo = setInterval(() => {
    let now = new Date().getTime();
    let limitTime = countDownDate - now;
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    let hours = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);
    let minutes = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);
    let seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(
      -2
    );

    $countDown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segudos</h3>`;

    if (limitTime < 0) {
      clearInterval(countDownTempo);
      $countDown.innerHTML = `<h3>${finalMessage}`;
    }
  }, 1000);
}
