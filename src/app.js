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
  renderLoginPage,
  checkLoginStatus,
  renderListModal,
} from "./pages/index.js";

function refreshStudentSection() {
  const contentElement = document.querySelector("#content");
  if (contentElement) {
    contentElement.innerHTML = renderStudentSection();
    addEventListenersToStudentSection();
    addLoadedClassToCards();
  } else {
    console.error("Content element not found");
  }
}
function refreshTeacherSection() {
  const contentElement = document.querySelector("#content");
  if (contentElement) {
    contentElement.innerHTML = renderTeacherSection();
    addEventListenersToTeacherSection();
    addLoadedClassToCards();
  } else {
    console.error("Content element not found");
  }
}
function refreshClassSection() {
  const contentElement = document.querySelector("#content");
  if (contentElement) {
    contentElement.innerHTML = renderClassSection();
    addEventListenersToClassSection();
    addLoadedClassToCards();
  } else {
    console.error("Content element not found");
  }
}

function handleAddTeacherClick() {
  renderTeacherModal(null, refreshTeacherSection);
}
function handleEditTeacher(itemId) {
  renderTeacherModal(itemId, refreshTeacherSection);
}
function handleAddStudentClick() {
  renderStudentModal(null, refreshStudentSection);
}
function handleEditStudent(itemId) {
  renderStudentModal(itemId, refreshStudentSection);
}
function handleAddClassClick() {
  renderClassModal(null, refreshClassSection);
}
function handleEditClass(itemId) {
  renderClassModal(itemId, refreshClassSection);
}

function handleDashboardLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderDashboard();
  makeActive(event);
  addLoadedClassToCards();
}

function handleTeachersLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderTeacherSection();
  makeActive(event);
  addEventListenersToTeacherSection();
  addLoadedClassToCards();
}

function handleStudentsLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderStudentSection();
  makeActive(event);
  addEventListenersToStudentSection();
  addLoadedClassToCards();
}

function handleClassesLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderClassSection();
  makeActive(event);
  addEventListenersToClassSection();
  addLoadedClassToCards();
}

function handleDeleteClass(itemId) {
  const deleteRequest = confirm("Are you sure you want to delete");
  if (deleteRequest) {
    deleteClass(itemId);
    refreshClassSection();
  }
}
function handleDeleteStudent(itemId) {
  const deleteRequest = confirm("Are you sure you want to delete");
  if (deleteRequest) {
    deleteStudent(itemId);
    refreshStudentSection();
  }
}
function handleDeleteTeacher(itemId) {
  const deleteRequest = confirm("Are you sure you want to delete");
  if (deleteRequest) {
    deleteTeacher(itemId);
    refreshTeacherSection();
  }
}

function handleStudentsListClick(text, classId) {
  renderListModal(text, classId);
}
function handleTeachersListClick(text, classId) {
  renderListModal(text, classId);
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

  const studentListButtons = document.querySelectorAll("#studentListBtn");
  studentListButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () =>
      handleStudentsListClick(itemId, "Student")
    );
  });

  const teacherListButtons = document.querySelectorAll("#teacherListBtn");
  teacherListButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () =>
      handleTeachersListClick(itemId, "Teacher")
    );
  });
}

function initializeApp() {
  document.addEventListener("DOMContentLoaded", () => {
    const appRoot = document.querySelector("#app");

    if (!appRoot) {
      console.error("App root not found");
      return;
    }

    const isLoggedIn = checkLoginStatus();

    if (isLoggedIn) {
      appRoot.innerHTML = renderNavbar() + renderDashboard() + renderFooter();
      addLoadedClassToCards();
    } else {
      appRoot.innerHTML = renderLoginPage();
      loginSubmitEventListener();
    }

    navigationLinks();

    initializeData();
  });
}

const loginSubmitEventListener = () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.target && e.target.id === "loginForm") {
      const formData = new FormData(e.target);

      const user = {
        firstName: formData.get("firstname").trim(),
        lastName: formData.get("lastname").trim(),
        password: formData.get("password").trim(),
      };

      if (user.password !== "Hicoders_2024") {
        alert("Incorrect password");
        return;
      }
      sessionStorage.setItem(
        "isLoggedIn",
        `${user.firstName} ${user.lastName}`
      );
      window.location.href = "./index.html";
    }
  });
};

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
function addLoadedClassToCards() {
  setTimeout(() => {
    document.querySelectorAll(".col-md-4 .card").forEach((card) => {
      card.classList.add("loaded");
    });
  }, 100);
}

initializeApp();
