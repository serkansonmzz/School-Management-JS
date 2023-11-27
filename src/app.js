import {
  renderNavbar,
  renderDashboard,
  renderStudentSection,
  renderTeacherSection,
  renderClassSection,
  renderFooter,
  makeActive,
  initializeData,
} from "./pages/index.js";

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

function initializeApp() {
  document.addEventListener("DOMContentLoaded", () => {
    const appRoot = document.querySelector("#app");
    appRoot.innerHTML = renderNavbar() + renderDashboard() + renderFooter();

    //! management of event related to navbar links
    document
      .getElementById("dashboardLink")
      .addEventListener("click", handleDashboardLinkClick);
    document
      .getElementById("teachersLink")
      .addEventListener("click", handleTeachersLinkClick);
    document
      .getElementById("studentsLink")
      .addEventListener("click", handleStudentsLinkClick);
    document
      .getElementById("classesLink")
      .addEventListener("click", handleClassesLinkClick);
  });
  initializeData();
}

initializeApp();
//calling the function that triggers the whole structure.
