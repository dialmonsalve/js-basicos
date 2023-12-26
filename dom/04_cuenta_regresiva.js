const doc = document;
export function countDown(id, limitDate, finalMessage) {
  const countDown = doc.getElementById(id);
  const countDownDate = new Date(limitDate).getTime();

  const countDownTime = setInterval(() => {
    const now = new Date().getTime();
    const limitTime = countDownDate - now;
    const days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    const hours = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);
    const minutes = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);
    const seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(
      -2
    );

    countDown.innerHTML = `
    <h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>
    `;

    if (limitTime <= 0) {
      clearInterval(countDownTime);
      countDown.innerHTML = `
      <h3>${finalMessage}</h3>
      `;
    }
  }, 1000);
}
