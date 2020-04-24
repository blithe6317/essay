var result = 0;
var hitResult = "";
var str = "";

window.onload = function () {
  init();
};

function init() {
  console.log("init");

  const btns = document.getElementsByClassName("btn");
}

function showInput() {
  const div = document.getElementById("input");
  div.innerText = str;
}

function inputChange(s) {
  str += s;
  showInput();
}

function clear() {
  str = "";
  result = 0;
  showInput();
}

function calculation() {
  if (!str) return;
  let arr = [];
  let nu = "";
  for (let i = 0; i < str.length; i++) {
    let s = str.charAt(i);
    switch (s) {
      case "/":
      case "*":
      case "+":
      case "-":
      case "%":
        arr.push(parseFloat(nu));
        arr.push(s);
        break;
      default:
        nu += s;
    }
  }
  arr.push(parseFloat(nu));

  for (let i = 0; i < arr.length; i++) {
    var s_1 = arr[i - 1];
    var s = arr[i];
    var s1 = arr[i + 1];
    switch (s) {
      case "/":
        arr[i] = s_1 / s1;
        arr[i - 1] = null;
        arr[i + 1] = null;
        break;
      case "*":
        arr[i] = s_1 * s1;
        arr[i - 1] = null;
        arr[i + 1] = null;
        break;
      case "%":
        arr[i] = s_1 % s1;
        arr[i - 1] = null;
        arr[i + 1] = null;
        break;
      default:
    }
  }
}
