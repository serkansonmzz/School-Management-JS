import { getFromLocalStorage, saveToLocalStorage } from "../../../src/index.js";

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

  const foundedTeacherClasses = teacherInfo
    ? teacherInfo.classes
        .map((classId) =>
          schoolData.find(
            (item) => item.type === "class" && item.id === Number(classId)
          )
        )
        .filter((classId) => classId !== undefined)
    : [];

  return foundedTeacherClasses;
};

const getStudentsForTeacher = (teacherId) => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  const teacherInfo = getTeacherById(teacherId);

  const foundTeacherStudents = teacherInfo
    ? teacherInfo.students
        .map((studentId) =>
          schoolData.find(
            (item) => item.type === "student" && item.id === Number(studentId)
          )
        )
        .filter((studentId) => studentId !== undefined)
    : [];
  console.log("getStudentsForTeacher ", foundTeacherStudents);
  return foundTeacherStudents;
};

const saveTeacher = (teacher) => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  const newTeacherId = Date.now();

  schoolData.push({ ...teacher, type: "teacher", id: newTeacherId });

  teacher.classes.forEach((classId) => {
    const classIndex = schoolData.findIndex(
      (item) => item.type === "class" && item.id === Number(classId)
    );
    if (classIndex !== -1) {
      schoolData[classIndex].teachers.push(newTeacherId);
    }
  });

  teacher.students.forEach((studentId) => {
    const studentIndex = schoolData.findIndex(
      (item) => item.type === "student" && item.id === Number(studentId)
    );
    if (studentIndex !== -1) {
      if (!schoolData[studentIndex].teachers.includes(newTeacherId)) {
        schoolData[studentIndex].teachers.push(newTeacherId);
      }
    }
  });

  saveToLocalStorage("schoolData", schoolData);
};

const updateTeacher = (teacherId, updatedInfo) => {
  let schoolData = getFromLocalStorage("schoolData") || [];
  const oldTeacherData = getTeacherById(teacherId);

  schoolData = schoolData.map((item) => {
    if (item.type === "teacher" && item.id === Number(teacherId)) {
      return { ...item, ...updatedInfo };
    }

    if (item.type === "class") {
      if (
        oldTeacherData.classes.includes(item.id) &&
        !updatedInfo.classes.includes(item.id)
      ) {
        item.teachers = item.teachers.filter(
          (tid) => tid !== Number(teacherId)
        );
      } else if (
        !oldTeacherData.classes.includes(item.id) &&
        updatedInfo.classes.includes(item.id)
      ) {
        item.teachers.push(Number(teacherId));
      }
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

const totalTeacherCount = () => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  return schoolData.filter((item) => item.type === "teacher").length;
};

export {
  getTeachers,
  getTeacherById,
  saveTeacher,
  updateTeacher,
  deleteTeacher,
  getClassesForTeacher,
  getStudentsForTeacher,
  totalTeacherCount,
};
