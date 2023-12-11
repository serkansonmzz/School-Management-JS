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
const getTeachersForClass = (classId) => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  const classInfo = schoolData.find((pclass) => pclass.id === Number(classId));
  const teachers = classInfo
    ? schoolData.filter(
        (item) =>
          item.type === "teacher" && classInfo.teachers.includes(item.id)
      )
    : [];
  return teachers;
};
const getStudentsForClass = (classId) => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  const classInfo = schoolData.find(
    (item) => item.type === "class" && item.id === Number(classId)
  );
  const students = classInfo
    ? schoolData.filter(
        (item) =>
          item.type === "student" && classInfo.students.includes(item.id)
      )
    : [];

  return students;
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

const totalClassCount = () => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  return schoolData.filter((item) => item.type === "class").length;
};

export {
  getClasses,
  getClassById,
  saveClass,
  updateClass,
  deleteClass,
  totalClassCount,
  getTeachersForClass,
  getStudentsForClass,
};
