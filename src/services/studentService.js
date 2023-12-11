import { getFromLocalStorage, saveToLocalStorage } from "../helpers/utilize.js";

const getStudents = () => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  return schoolData.filter((item) => item.type === "student");
};

const getStudentById = (studentId) => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  return schoolData.find(
    (item) => item.type === "student" && item.id === Number(studentId)
  );
};
const getClassesForStudent = (studentId) => {
  const schoolData = getFromLocalStorage("schoolData") || [];

  const studentInfo = getStudentById(studentId);

  const findedStudentClasses = studentInfo
    ? studentInfo.classes.map((classId) =>
        schoolData.find(
          (item) => item.type === "class" && item.id === Number(classId)
        )
      )
    : [];

  return findedStudentClasses;
};
const getStudentAverageGrade = (studentId) => {
  const studentInfo = getStudentById(studentId);
  if (studentInfo && studentInfo.grades) {
    const total = studentInfo.grades.reduce((acc, grade) => acc + grade, 0);
    const average = total / studentInfo.grades.length;
    return average;
  } else {
    return "No students or grades found";
  }
};

const saveStudent = (student) => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  schoolData.push({ ...student, type: "student", id: Date.now() });
  saveToLocalStorage("schoolData", schoolData);
};

const updateStudent = (studentId, updatedInfo) => {
  let schoolData = getFromLocalStorage("schoolData") || [];

  schoolData = schoolData.map((item) => {
    if (item.type === "student" && item.id === Number(studentId)) {
      return { ...item, ...updatedInfo };
    }
    return item;
  });
  saveToLocalStorage("schoolData", schoolData);
};

const deleteStudent = (studentId) => {
  let schoolData = getFromLocalStorage("schoolData") || [];
  schoolData = schoolData.filter(
    (item) => !(item.type === "student" && item.id === Number(studentId))
  );
  saveToLocalStorage("schoolData", schoolData);
};

const totalStudentCount = () => {
  const schoolData = getFromLocalStorage("schoolData") || [];
  return schoolData.filter((item) => item.type === "student").length;
};

export {
  getStudents,
  getStudentById,
  saveStudent,
  updateStudent,
  deleteStudent,
  getClassesForStudent,
  getStudentAverageGrade,
  totalStudentCount,
};
