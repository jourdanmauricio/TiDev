const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);

  const limitBall = $ball.getBoundingClientRect();
  const limitStage = $stage.getBoundingClientRect();
  // console.log(e.keyCode);
  // console.log(e.key);

  switch (e.keyCode) {
    case 37:
      // ArrowLeft
      if (limitBall.left > limitStage.left + 10) {
        x--;
        e.preventDefault();
      }
      break;
    case 38:
      // ArrowUp
      if (limitBall.top > limitStage.top + 10) {
        y--;
        e.preventDefault();
      }
      break;
    case 39:
      // ArrowRight
      if (limitBall.right < limitStage.right - 10) {
        x++;
        e.preventDefault();
      }
      break;
    case 40:
      // ArrowDown
      if (limitBall.bottom < limitStage.bottom - 10) {
        y++;
        e.preventDefault();
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shorcuts(e) {
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(`Control: ${e.ctrlKey}`);
  // console.log(`Alt: ${e.altKey}`);
  // console.log(`Shift: ${e.shiftKey}`);
  // console.log(e);

  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmación con el teclado");
  }
  if (e.key === "o" && e.altKey) {
    prompt("Haz lanzado un aviso con el teclado");
  }
}
