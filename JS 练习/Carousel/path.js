const svg = d3.select("svg");
const bodyG = svg.append("g").attr("class", "body");
const start = { x: 100, y: 300 };
const end = { x: 500, y: 200 };
const path = d3.select("#path");
const pathNode = path.node();
const len = 30;
window.onload = function() {
  render();
  renderCanvas();
};

function render() {
  drawCircle();
  drawPath();
}
function drawCircle() {
  bodyG
    .append("circle")
    .attr("r", 4.5)
    .attr("cx", start.x)
    .attr("cy", start.y)
    .attr("stroke", "#f00")
    .attr("fill", "none");

  bodyG
    .append("circle")
    .attr("r", 4.5)
    .attr("cx", end.x)
    .attr("cy", end.y)
    .attr("stroke", "#f00")
    .attr("fill", "none");
}

function drawPath() {
  const dx = start.x - end.x;
  const dy = start.y - end.y;
  const dr = Math.sqrt(dx * dx + dy * dy);

  const path = bodyG
    .append("path")
    .attr("clss", "path")
    .attr("stroke", "#000")
    .attr("fill", "none")
    .attr("d", `M ${start.x} ${start.y} A ${dr} ${dr} 0 0 1 ${end.x} ${end.y}`);

  animationPath(path);
}

function animationPath(path) {
  const pathNode = path.node();
  const len = 100;
  const totalLen = pathNode.getTotalLength() + len;
  const totalTime = totalLen * 6;
  const inter = 16;

  const dx = start.x - end.x;
  const dy = start.y - end.y;
  const dr = Math.sqrt(dx * dx + dy * dy);

  const animationPath = bodyG
    .append("path")
    .attr("stroke", "#000")
    .attr("fill", "rgba(0,0,0,0.6)");

  d3.timer(animation, inter);

  let count = 0;
  function animation(t) {
    if (count * inter >= totalTime) {
      count = 0;
    }

    const curLen = (count * inter) / 6;
    const locS = pathNode.getPointAtLength(curLen);
    const locE = pathNode.getPointAtLength(curLen - len);
    const loc1 = { x: locS.x - 2, y: locS.y - 2 };
    const loc2 = { x: locS.x + 2, y: locS.y + 2 };

    const d = `M  ${loc1.x} ${loc1.y} A 4 4 0 0 1 ${loc2.x} ${loc2.y}
    A ${dr} ${dr} 0 0 0 ${locE.x} ${locE.y}
    A ${dr} ${dr} 0 0 1 ${loc1.x} ${loc1.y}`;
    animationPath.attr("d", d);
    count++;
  }
}

function renderCanvas() {
  animate();
  //   drawCanvasCircle(ctx, start);
  //   drawCanvasCircle(ctx, end);
  //   drawCurvePath(ctx, start, end);
}

function drawCanvasCircle(ctx, location) {
  ctx.beginPath();
  ctx.strokeStyle = "#f00";
  ctx.arc(location.x, location.y, 4.5, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.closePath();
}
var percent = 0;

function animate() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, 600, 400);

  drawCurvePath(ctx, start, end);
  drawCurvePathAnimate(ctx, start, end, percent);

  percent = (percent + 1) % 100;
  requestAnimationFrame(animate);
}

function drawCurvePath(ctx, start, end) {
  const cp = getCurveCP(start, end, 0.25);
  ctx.beginPath();
  ctx.strokeStyle = "#000";
  ctx.moveTo(start.x, start.y);
  ctx.quadraticCurveTo(cp.x, cp.y, end.x, end.y);
  ctx.stroke();
  ctx.closePath();
}

function drawCurvePathAnimate(ctx, start, end, percent) {
  const cp = getCurveCP(start, end, 0.25);

  var t = percent / 100;

  var v01 = {
    x: cp.x - start.x,
    y: cp.y - start.y
  };

  var v12 = {
    x: end.x - cp.x,
    y: end.y - cp.y
  };

  var q0 = {
    x: start.x + v01.x * t,
    y: start.y + v01.y * t
  };

  var q1 = {
    x: cp.x + v12.x * t,
    y: cp.y + v12.y * t
  };

  var v = {
    x: q1.x - q0.x,
    y: q1.y - q0.y
  };

  var b = {
    x: q0.x + v.x * t,
    y: q0.y + v.y * t
  };
  ctx.beginPath();
  ctx.strokeStyle = "#000";

  //   ctx.moveTo(start.x, start.y);
  //   ctx.quadraticCurveTo(q0.x, q0.y, b.x, b.y);

  ctx.arc(b.x, b.y, 4.5, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.closePath();
}

function getCurveCP(start, end, curveness) {
  return {
    x: (start.x + end.x) / 2 - (start.y - end.y) * curveness,
    y: (start.y + end.y) / 2 - (end.x - start.x) * curveness
  };
}

function quadraticBezier(p0, p1, p2, t) {
  var k = 1 - t;
  return k * k * p0 + 2 * (1 - t) * t * p1 + t * t * p2; // 这个方程就是二次贝赛尔曲线方程
}
