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
