const doc = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTime;
  doc.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTime = setInterval(() => {
        const clockHour = new Date().toLocaleTimeString();
        doc.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clockTime);
      doc.querySelector(clock).innerHTML = null;
      doc.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(pathSound, btnPlay, btnStop) {
  let alarmClock;
  const alarm = doc.createElement("audio");
  alarm.src = pathSound;

  doc.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmClock = setInterval(() => {
        alarm.play();
      }, 2000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(alarmClock);
      alarm.pause();
      alarm.currentTime = 0;
      doc.querySelector(btnPlay).disabled = false;
    }
  });
}
