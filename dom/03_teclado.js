const doc = document;
let x = 0;
let y = 0;
export function moveBall(event, selectorBall, selectorStage) {
  const ball = doc.querySelector(selectorBall);
  const stage = doc.querySelector(selectorStage);

  const limitBall = ball.getBoundingClientRect();
  const limitStage = stage.getBoundingClientRect();

  switch (event.keyCode) {
    case 37:
      if (limitBall.left > limitStage.left) {
        event.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitBall.top > limitStage.top) {
        event.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitBall.right < limitStage.right) {
        event.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitBall.bottom < limitStage.bottom) {
        event.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  if (e.key === "a" && e.altKey) {
    alert("Presionando la letra a");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Presionando la letra p");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Presionando la letra c");
  }
}
