import { getFromLocalStorage, saveToLocalStorage } from "../helpers/utilize.js";

const getClasses = () => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  return schoolData.filter((item) => item.type === "class");
};

const getClassById = (classId) => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  return schoolData.find(
    (item) => item.type === "class" && item.id === Number(classId)
  );
};
