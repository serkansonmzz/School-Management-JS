import schoolData from "./data.js";

const initializeData = () => {
  if (!localStorage.getItem("schoolData")) {
    localStorage.setItem("schoolData", JSON.stringify(schoolData));
  }
};

export { initializeData };
