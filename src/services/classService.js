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
const getTeacherForClass = (teacherId) => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  const teacherInfo = schoolData.find(
    (item) => item.type === "teacher" && item.id === Number(teacherId)
  );
  return teacherInfo;
};

const saveClass = (classInfo) => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  schoolData.push({ ...classInfo, type: "class", id: Date.now() });
  saveToLocalStorage("schoolData", schoolData);
};

const updateClass = (classId, updatedInfo) => {
  let schoolData = getFromLocalStorage("schoolData") || [];

  schoolData = schoolData.map((item) => {
    if (item.type === "class" && item.id === Number(classId)) {
      return { ...item, ...updatedInfo };
    }
    return item;
  });
  saveToLocalStorage("schoolData", schoolData);
};
const deleteClass = (classId) => {
  let schoolData = getFromLocalStorage("schoolData") || [];
  schoolData = schoolData.filter(
    (item) => !(item.type === "class" && item.id === Number(classId))
  );
  saveToLocalStorage("schoolData", schoolData);
};

export {
  getClasses,
  getClassById,
  saveClass,
  updateClass,
  deleteClass,
  getTeacherForClass,
};
