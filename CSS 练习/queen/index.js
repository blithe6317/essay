const findSolutions = n => {
  let solutions = [];
  if (n < 4) return [];
  const startTime = new Date().getTime();
  queen([], n, solutions);
  // queen1(n, solutions);
  const endTime = new Date().getTime();
  console.log(endTime - startTime);
  return solutions;
};

function queen(solution = [], n = 4, solutions) {
  if (solution.length === n) {
    solutions.push(solution.map(item => item.y));
    return solution;
  }
  // const maybY = getMaybeY(solution, n);
  for (let y = 0; y < n; y++) {
    const curr = { x: solution.length, y };
    if (check(solution, curr)) {
      solution.push(curr);
      queen(solution, n, solutions);
      solution.pop();
    }
  }
}

function check(solution, location) {
  if (solution.length === 0) return true;
  return solution.every(
    item =>
      item.x !== location.x &&
      item.y !== location.y &&
      Math.abs(item.x - location.x) !== Math.abs(item.y - location.y)
  );
}

function queen1(n = 4, solutions = []) {
  let total = Math.pow(n, n);
  for (let i = 0; i < total; i++) {
    const str = format(i, n);
    if (!str) continue;
    const arr = str.split("").map(i => parseInt(i));
    if (check1(arr)) {
      solutions.push(arr);
    }
  }
}

function check1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (
        array[i] === array[j] ||
        Math.abs(i - j) === Math.abs(array[i] - array[j])
      ) {
        return false;
      }
    }
  }
  return true;
  X;
}

function format(num, n) {
  let flag = true;
  let str = "";
  let nextNum = num;
  while (flag) {
    let m = nextNum % n;
    nextNum = Math.floor(nextNum / n);
    str = m + str;
    if (nextNum === 0) {
      flag = false;
    }
  }
  if (str.length === n - 1) {
    str = "0" + str;
  } else if (str.length < n - 1) {
    return false;
  }
  return str;
}

function queen2(n) {
  const initArr = initArray(n);
  // if (initArr.every(i => i !== -1)) {
  //   return initArr;
  // }
  // for(){}
}

function initArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    var item = [];
    for (let j = 0; j < n; j++) {
      item.push(0);
    }
    arr.push(item);
  }
  return arr;
}

function getMaybeY(solution, n) {
  let allY = [];
  for (let i = 0; i < n; i++) {
    const has = check(solution, { x: solution.length, y: i });
    if (has) {
      allY.push(i);
    }
  }
  return allY;
}

function addBg(solutions) {
  clearBg();
  const table = document.getElementsByClassName("queen")[0];
  solutions.forEach((y, x) => {
    const tr = table.getElementsByTagName("tr")[y];
    if (tr) {
      const td = tr.getElementsByTagName("td")[x];
      const bg = '<div class="bg"></div>';
      td.innerHTML = bg;
    }
  });
}

window.onload = function() {
  findSolutions(8);
  addClickListener();
};

function addClickListener() {
  const table = document.getElementsByClassName("queen")[0];
  table.addEventListener("click", function(e) {
    const { target } = e;
    if (target.nodeName === "TD") {
      const bg = '<div class="bg"></div>';
      if (target.getElementsByClassName("bg").length > 0) {
        target.innerHTML = "";
      } else {
        target.innerHTML = bg;
      }
    }
    if (target.nodeName === "DIV") {
      target.parentNode.innerHTML = "";
    }
  });
}

function clearBg() {
  const table = document.getElementsByClassName("queen")[0];
  const tds = table.getElementsByTagName("td");
  for (let i = 0; i < tds.length; i++) {
    tds[i].innerHTML = "";
  }
}
let currIndex = 0;
function next() {
  if (currIndex === solutions.length - 1) return;
  currIndex++;
  addBg(solutions[currIndex]);
}
function pre() {
  if (currIndex === 0) return;
  currIndex--;
  addBg(solutions[currIndex]);
}
