const getStroage = key => {
  if (!key) return;
  const str = window.localStorage.getItem(key);
  return JSON.parse(str);
};

const setStroage = (key, value) => {
  if (!key) return;
  window.localStorage.setItem(key, JSON.stringify(value));
};
