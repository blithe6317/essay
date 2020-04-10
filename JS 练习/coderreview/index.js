const arrangeCodeReviewers = (frs, oldDevelopers, freshDevelopers) => {
  // todo

  frs.forEach(fr => {});
};

const findNextDeveloper = (fr, name, list) => {
  const index = list.findIndex(li => li === name);
  // if   (){}
};

const oldDevelopers = ["kzhang", "xiaozhang", "qianyang", "xlfu"]; // 这里是有限个，并且不循环的
const freshDevelopers = [
  "ghchen",
  "mingyuzhu",
  "xyqiu",
  "xphuang",
  "leichen",
  "zjcheng"
]; // 这里是有限个，并且不循环的

const frs = new Array(100).fill(null).map((_, index) => ({
  id: index + 1,
  developer: [...oldDevelopers, ...freshDevelopers][
    Math.floor(Math.random() * (oldDevelopers.length + freshDevelopers.length))
  ]
}));

console.log(arrangeCodeReviewers(frs, oldDevelopers, freshDevelopers));
    