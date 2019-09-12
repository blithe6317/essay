window.onload = () => {
  linsenersMouse();
};

let trans;
const box = document.getElementsByClassName("box")[0];
function linsenersMouse() {
  let mouseStart = false;
  document.addEventListener("mousedown", e => {
    trans = box.style.transform;
    mouseStart = {
      clientX: e.clientX,
      clientY: e.clientY
    };
  });
  document.addEventListener("mouseup", e => {
    mouseStart = false;
  });
  document.addEventListener("mousemove", e => {
    if (mouseStart) {
      rotateBox({
        offsetX: e.clientX - mouseStart.clientX,
        offsetY: e.clientY - mouseStart.clientY
      });
    }
  });
}

function rotateBox(loaction) {
  var reg = /-{0,1}[0-9]{1,}/g;
  const arr = trans.match(reg);
  let X = +arr[0] + parseInt(-loaction.offsetY / 10);
  let Y = +arr[1] + parseInt(loaction.offsetX / 10);
  box.style.transform = `rotateX(${X}deg) rotateY(${Y}deg) rotateZ(0deg)`;
}

function addAnimationClass() {
  if (box.className.indexOf("animation") < 0) {
    box.className += " animation";
  }
}

function removeAnimationClass() {
  if (box.className.indexOf("animation") >= 0) {
    box.className = "box";
  }
}
