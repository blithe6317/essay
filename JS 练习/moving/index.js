function test(m, n) {
  const dom = document.getElementById("root");
  for (let i = 0; i < m; i++) {
    const hDiv = document.createElement("div");
    hDiv.className = "h";
    for (let j = 0; j < n; j++) {
      const vDiv = document.createElement("div");
      vDiv.className = "item";

      //   vDiv.innerText = `${i},${j}`;
      vDiv.innerText = formatNum(i) + formatNum(j);
      hDiv.append(vDiv);
    }
    dom.append(hDiv);
  }
}

window.onload = function () {
  test(7, 2);
};

var formatNum = function (num) {
  var s = num + "";
  var arr = s.split("");
  return arr.reduce((count, i) => {
    count += parseInt(i);
    return count;
  }, 0);
};
