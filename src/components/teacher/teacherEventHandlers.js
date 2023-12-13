import {
  renderTeacherModal,
  deleteTeacher,
  refreshTeacherSection,
  renderListModal,
  renderTeacherSection,
  makeActive,
  addEventListenersToTeacherSection,
  addLoadedClassToCards,
  showDeleteSweetAlert,
} from "../../../src/index.js";

function handleAddTeacherClick() {
  renderTeacherModal(null, refreshTeacherSection);
}

function handleEditTeacher(itemId) {
  renderTeacherModal(itemId, refreshTeacherSection);
}

function handleDeleteTeacher(itemId) {
  showDeleteSweetAlert(itemId, deleteTeacher, refreshTeacherSection);
}
function handleTeachersListClick(itemId, text) {
  renderListModal(itemId, text);
}

function handleStudentListClickFromTeacher(itemId, text, isTeacher = false) {
  renderListModal(itemId, text, isTeacher);
}

function handleTeachersLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderTeacherSection();
  makeActive(event);

  addEventListenersToTeacherSection();
  addLoadedClassToCards();
}

export {
  handleAddTeacherClick,
  handleEditTeacher,
  handleDeleteTeacher,
  handleTeachersListClick,
  handleStudentListClickFromTeacher,
  handleTeachersLinkClick,
};
