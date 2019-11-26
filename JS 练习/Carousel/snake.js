var points = [
  { x: 10, y: 250 },
  { x: 60, y: 250 },
  { x: 60, y: 300 },
  { x: 100, y: 300 }
];
var snakeLen = 200;
var direction = "right";
const width = 500;
const height = 500;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = function() {
  aoutoMove(points);
};

window.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
    case 39:
    case 40:
    case 37:
      directionChange(e.keyCode);
      break;
    default:
  }
};

function directionChange(keyCode) {
  switch (keyCode) {
    case 38:
      if (direction !== "up" || direction !== "down") {
        direction = "up";
      }
      break;
    case 39:
      if (direction !== "right" || direction !== "left") {
        direction = "right";
      }
      break;
    case 40:
      if (direction !== "up" || direction !== "down") {
        direction = "down";
      }
      break;
    case 37:
      if (direction !== "right" || direction !== "left") {
        direction = "left";
      }
      break;
    default:
  }
  const start = points[points.length - 1];
  points.splice(points.length - 1, 0, start);
}

function darwLines(points) {
  ctx.clearRect(0, 0, 1000, 1000);
  ctx.beginPath();
  const start = points[points.length - 1];
  ctx.strokeStyle = "#f00";
  ctx.lineWidth = 5;
  ctx.moveTo(start.x, start.y);
  for (var i = points.length - 2; i >= 0; i--) {
    const d = points[i];
    ctx.lineTo(d.x, d.y);
  }
  ctx.stroke();
  ctx.closePath();
}

function aoutoMove(points) {
  move(points);
  const start = points[points.length - 1];
  if (start.x >= 0 && start.x <= 500 && start.y >= 0 && start.y <= 500) {
    requestAnimationFrame(() => {
      aoutoMove(points);
    });
  }
}

function move(points) {
  const start = startNext(points);
  if (start.x < 0 || start.y < 0) {
  }
  const second = points[1];
  const end = endNext(points);
  points.splice(points.length - 1, 1, start);
  if (second.x === end.x && second.y === end.y) {
    points.splice(1, 1);
  }
  points.splice(0, 1, end);

  darwLines(points);
}

function startNext(points) {
  const start = points[points.length - 1];
  return dotNext(start, direction);
}

function endNext(points) {
  const end = points[0];
  const second = points[1];
  const k = 5;
  let direction = "";
  if (end.x === second.x) {
    if (end.y > second.y) {
      direction = "up";
    } else {
      direction = "down";
    }
  } else if (end.y === second.y) {
    if (end.x > second.x) {
      direction = "left";
    } else {
      direction = "right";
    }
  }
  return dotNext(end, direction);
}

function dotNext(dot, direction) {
  const k = 5;
  switch (direction) {
    case "up":
      dot = {
        ...dot,
        y: dot.y - k
      };
      break;
    case "left":
      dot = {
        ...dot,
        x: dot.x - k
      };
      break;
    case "down":
      dot = {
        ...dot,
        y: dot.y + k
      };
      break;
    case "right":
      dot = {
        ...dot,
        x: dot.x + k
      };
      break;
  }
  return dot;
}

function randomDot() {
  Math.random();
}
