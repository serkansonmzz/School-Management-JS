function handleDashboardLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderDashboard();
}
function handleTeachersLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderTeacherSection();
}
function handleStudentsLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderStudentSection();
}
function handleClassesLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderClassSection();
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
}
