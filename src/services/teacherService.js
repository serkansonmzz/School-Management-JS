import { getFromLocalStorage, saveToLocalStorage } from "../helpers/utilize.js";

const getTeachers = () => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  return schoolData.filter((item) => item.type === "teacher");
};

const getTeacherById = (teacherId) => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  return schoolData.find(
    (item) => item.type === "teacher" && item.id === Number(teacherId)
  );
};
const getClassesForTeacher = (teacherId) => {
  const schoolData = getFromLocalStorage("schoolData") || [];

  const teacherInfo = getTeacherById(teacherId);

  const findedTeacherClasses = teacherInfo
    ? teacherInfo.classes.map((classId) =>
        schoolData.find(
          (item) => item.type === "class" && item.id === Number(classId)
        )
      )
    : [];

  return findedTeacherClasses;
};

const saveTeacher = (teacher) => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  schoolData.push({ ...teacher, type: "teacher", id: Date.now() });
  saveToLocalStorage("schoolData", schoolData);
};

const updateTeacher = (teacherId, updatedInfo) => {
  let schoolData = getFromLocalStorage("schoolData") || [];

  if (updatedInfo.classes) {
    updatedInfo.classes = updatedInfo.classes.map(Number);
  }

  schoolData = schoolData.map((item) => {
    if (item.type === "teacher" && item.id === Number(teacherId)) {
      return { ...item, ...updatedInfo };
    }
    return item;
  });
  saveToLocalStorage("schoolData", schoolData);
};
const deleteTeacher = (teacherId) => {
  let schoolData = getFromLocalStorage("schoolData") || [];
  schoolData = schoolData.filter(
    (item) => !(item.type === "teacher" && item.id === Number(teacherId))
  );
  saveToLocalStorage("schoolData", schoolData);
};

export {
  getTeachers,
  getTeacherById,
  saveTeacher,
  updateTeacher,
  deleteTeacher,
  getClassesForTeacher,
};
