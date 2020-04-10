window.onload = function() {
  init();
};
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const init = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const start = [30, 200];
  const end = [350, 200];
  //   drawCurvePath(ctx, start, [150, 80], end);
  //   drawCurvePath1(ctx, start, end, 0.3);
  //   drawCurvePath2(ctx, start, end, 0.3, 50);
  //   animate();
};

const drawCurvePath = (ctx, start, cp, end) => {
  ctx.moveTo(start[0], start[1]);

  ctx.quadraticCurveTo(cp[0], cp[1], end[0], end[1]);

  ctx.strokeStyle = "#000";
  ctx.stroke();
};

const drawCurvePath1 = (ctx, start, end, curveness) => {
  ctx.moveTo(start[0], start[1]);

  const cp = [
    (start[0] + end[0]) / 2 - (start[1] - end[1]) * curveness,
    (start[1] + end[1]) / 2 - (end[0] - start[0]) * curveness
  ];

  ctx.quadraticCurveTo(cp[0], cp[1], end[0], end[1]);

  ctx.strokeStyle = "#000";
  ctx.stroke();
};

let percent = 0;
const animate = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const start = [30, 200];
  const end = [350, 200];
  ctx.clearRect(0, 0, 500, 400);
  ctx.beginPath();
  drawCurvePath3(ctx, start, end, 0.3, percent);
  ctx.stroke();
  percent = (percent + 1) % 100;
  requestAnimationFrame(animate);
};

const drawCurvePath2 = (ctx, start, end, curveness, percent) => {
  const cp = [
    (start[0] + end[0]) / 2 - (start[1] - end[1]) * curveness,
    (start[1] + end[1]) / 2 - (end[0] - start[0]) * curveness
  ];
  ctx.moveTo(start[0], start[1]);

  for (var t = 0; t <= percent / 100; t += 0.01) {
    var x = quadraticBezier(start[0], cp[0], end[0], t);
    var y = quadraticBezier(start[1], cp[1], end[1], t);
    ctx.lineTo(x, y);
  }
};

const quadraticBezier = (p0, p1, p2, t) => {
  const k = 1 - t;
  return k * k * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
};

const drawCurvePath3 = (ctx, start, end, curveness, percent) => {
  const cp = [
    (start[0] + end[0]) / 2 - (start[1] - end[1]) * curveness,
    (start[1] + end[1]) / 2 - (end[0] - start[0]) * curveness
  ];

  const t = percent / 100;
  const p0 = start;
  const p1 = cp;
  const p2 = end;

  const v01 = [p1[0] - p0[0], p1[1] - p0[1]];
  const v12 = [p2[0] - p1[0], p2[1] - p1[1]];

  const q0 = [p0[0] + v01[0] * t, p0[1] + v01[1] * t];
  const q1 = [p1[0] + v12[0] * t, p1[1] + v12[1] * t];

  const v = [q1[0] - q0[0], q1[1] - q0[1]];

  const b = [q0[0] + v[0] * t, q0[1] + v[1] * t];

  ctx.moveTo(p0[0], p0[1]);

  ctx.quadraticCurveTo(q0[0], q0[1], b[0], b[1]);
};

let stars = [];

class Star {
  constructor(x, y, vx, vy, r = 4) {
    this.x = x || rand(-100, 600);
    this.y = y || -20 * Math.random();
    this.a = 0.01;
    this.vx = vx || 2 * Math.random();
    this.vy = vy || 3 * Math.random();
    this.r = r;
  }
  move() {
    this.vy += this.a;
    this.x += this.vx;
    this.r *= 0.992;
    this.y += this.vy;
    if (this.x < 0) this.x = 900;
    if (this.y > 600) {
      stars.forEach((star, i) => {
        if (star === this) {
          stars.splice(i, 1);
          stars.push(new Star());
        }
      });
    }
  }
  draw() {
    let { x, y } = this;
    ctx.beginPath();
    var grad = ctx.createRadialGradient(x, y, 1, x, y, 18);
    grad.addColorStop(0, "rgb(193,255,255)");
    grad.addColorStop(1, "rgb(1,1,1)");
    ctx.fillStyle = grad;
    ctx.arc(x, y, this.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
}
function initStars() {
  for (let i = 0; i < 1000; i++) {
    stars.push(
      new Star(
        Math.floor(rand(0, 800)),
        Math.floor(rand(0, 100)),
        rand(-3, 3),
        rand(1, 2)
      )
    );
  }
}
function rand(min, max) {
  return min + Math.random() * (max - min);
}
function draw() {
  for (let star of stars) {
    star.draw();
    star.move();
  }
  // 这里在不断加半透明蒙层，使上一帧的流星变淡
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.rect(0, 0, 800, 600);
  ctx.fill();
  requestAnimationFrame(draw);
}
function main() {
  ctx.fillRect(0, 0, 800, 600);
  initStars();
  draw();
}

main();
