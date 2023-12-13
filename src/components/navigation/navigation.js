import {
  handleDashboardLinkClick,
  handleTeachersLinkClick,
  handleStudentsLinkClick,
  handleClassesLinkClick,
} from "../../../src/index.js";

export function navigationLinks() {
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
