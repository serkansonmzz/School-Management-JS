const makeActive = (event) => {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
};

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { makeActive, getFromLocalStorage, saveToLocalStorage };
