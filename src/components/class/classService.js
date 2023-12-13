import { getFromLocalStorage, saveToLocalStorage } from "../../../src/index.js";

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
  const newClassId = Date.now();

  schoolData.push({ ...classInfo, type: "class", id: newClassId });

  classInfo.teachers.forEach((teacherId) => {
    const teacherIndex = schoolData.findIndex(
      (item) => item.type === "teacher" && item.id === Number(teacherId)
    );
    if (teacherIndex !== -1) {
      if (!schoolData[teacherIndex].classes.includes(newClassId)) {
        schoolData[teacherIndex].classes.push(newClassId);
      }
    }
  });

  classInfo.students.forEach((studentId) => {
    const studentIndex = schoolData.findIndex(
      (item) => item.type === "student" && item.id === Number(studentId)
    );
    if (studentIndex !== -1) {
      if (!schoolData[studentIndex].classes.includes(newClassId)) {
        schoolData[studentIndex].classes.push(newClassId);
      }
    }
  });

  saveToLocalStorage("schoolData", schoolData);
};

const updateClass = (classId, updatedInfo) => {
  let schoolData = getFromLocalStorage("schoolData") || [];
  const oldClassData = getClassById(classId);

  schoolData = schoolData.map((item) => {
    if (item.type === "class" && item.id === Number(classId)) {
      return { ...item, ...updatedInfo };
    }

    if (item.type === "teacher") {
      if (
        oldClassData.teachers.includes(item.id) &&
        !updatedInfo.teachers.includes(item.id)
      ) {
        item.classes = item.classes.filter((cid) => cid !== Number(classId));
      } else if (
        !oldClassData.teachers.includes(item.id) &&
        updatedInfo.teachers.includes(item.id)
      ) {
        item.classes.push(Number(classId));
      }
    } else if (item.type === "student") {
      if (
        oldClassData.students.includes(item.id) &&
        !updatedInfo.students.includes(item.id)
      ) {
        item.classes = item.classes.filter((cid) => cid !== Number(classId));
      } else if (
        !oldClassData.students.includes(item.id) &&
        updatedInfo.students.includes(item.id)
      ) {
        item.classes.push(Number(classId));
      }
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
