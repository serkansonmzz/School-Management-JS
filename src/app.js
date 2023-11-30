import {
  renderNavbar,
  renderDashboard,
  renderStudentSection,
  renderTeacherSection,
  renderClassSection,
  renderFooter,
  makeActive,
  initializeData,
  deleteClass,
  renderStudentModal,
  renderTeacherModal,
  renderClassModal,
  deleteTeacher,
  deleteStudent,
} from "./pages/index.js";

function refreshStudentSection() {
  const contentElement = document.querySelector("#content");
  if (contentElement) {
    contentElement.innerHTML = renderStudentSection();
    addEventListenersToStudentSection();
  } else {
    console.error("Content element not found");
  }
}
function refreshTeacherSection() {
  const contentElement = document.querySelector("#content");
  if (contentElement) {
    contentElement.innerHTML = renderTeacherSection();
    addEventListenersToTeacherSection();
  } else {
    console.error("Content element not found");
  }
}
function refreshClassSection() {
  const contentElement = document.querySelector("#content");
  if (contentElement) {
    contentElement.innerHTML = renderClassSection();
    addEventListenersToClassSection();
  } else {
    console.error("Content element not found");
  }
}

function handleDashboardLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderDashboard();
  makeActive(event);
}
function handleTeachersLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderTeacherSection();
  makeActive(event);
}
function handleStudentsLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderStudentSection();
  makeActive(event);
}
function handleClassesLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderClassSection();
  makeActive(event);
}

function handleAddClassClick() {
  renderClassModal(null, refreshClassSection);
}
function handleEditClass(itemId) {
  renderClassModal(itemId, refreshClassSection);
}
function handleDeleteClass(itemId) {
  const deleteRequest = confirm("Are you sure you want to delete");
  if (deleteRequest) {
    deleteClass(itemId);
  }
  refreshClassSection();
}
function handleAddTeacherClick() {
  renderTeacherModal(null, refreshTeacherSection);
}
function handleEditTeacher(itemId) {
  renderTeacherModal(itemId, refreshTeacherSection);
}
function handleDeleteTeacher(itemId) {
  const deleteRequest = confirm("Are you sure you want to delete");
  if (deleteRequest) {
    deleteTeacher(itemId);
  }
  refreshTeacherSection();
}
function handleAddStudentClick() {
  renderStudentModal(null, refreshStudentSection);
}
function handleEditStudent(itemId) {
  renderStudentModal(itemId, refreshStudentSection);
}
function handleDeleteStudent(itemId) {
  const deleteRequest = confirm("Are you sure you want to delete");
  if (deleteRequest) {
    deleteStudent(itemId);
  }
  refreshStudentSection();
}
function addEventListenersToClassSection() {
  const addClassButton = document.querySelector("#addClassButton");
  addClassButton.addEventListener("click", handleAddClassClick);

  const editClassButtons = document.querySelectorAll(".editClassButton");
  editClassButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () => handleEditClass(itemId));
  });

  const deleteClassButtons = document.querySelectorAll(".deleteClassButton");
  deleteClassButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () => handleDeleteClass(itemId));
  });
}
function addEventListenersToTeacherSection() {
  const addTeacherButton = document.querySelector("#addTeacherButton");
  addTeacherButton.addEventListener("click", handleAddTeacherClick);
  const editTeacherButtons = document.querySelectorAll(".editTeacherButton");
  editTeacherButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () => handleEditTeacher(itemId));
  });
  const deleteTeacherButtons = document.querySelectorAll(
    ".deleteTeacherButton"
  );
  deleteTeacherButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () => handleDeleteTeacher(itemId));
  });
}
function addEventListenersToStudentSection() {
  const addStudentButton = document.querySelector("#addStudentButton");
  addStudentButton.addEventListener("click", handleAddStudentClick);

  const editStudentButtons = document.querySelectorAll(".editStudentButton");

  editStudentButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () => handleEditStudent(itemId));
  });
  const deleteStudentButtons = document.querySelectorAll(
    ".deleteStudentButton"
  );
  deleteStudentButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () => handleDeleteStudent(itemId));
  });
}

function initializeApp() {
  document.addEventListener("DOMContentLoaded", () => {
    const appRoot = document.querySelector("#app");

    if (!appRoot) {
      console.error("App root not found");
      return;
    }

    appRoot.innerHTML = renderNavbar() + renderDashboard() + renderFooter();

    navigationLinks();

    initializeData();
  });
}

function navigationLinks() {
  navigationLinkItem("dashboardLink", handleDashboardLinkClick);
  navigationLinkItem("teachersLink", handleTeachersLinkClick);
  navigationLinkItem("studentsLink", handleStudentsLinkClick);
  navigationLinkItem("classesLink", handleClassesLinkClick);
}

function navigationLinkItem(linkName, handler) {
  const linkElement = document.getElementById(linkName);
  if (linkElement) {
    linkElement.removeEventListener("click", handler);
    linkElement.addEventListener("click", handler);
  } else {
    console.error(`Link element with id ${linkName} not found`);
  }
}

initializeApp();
//calling the function that triggers the whole structure.
