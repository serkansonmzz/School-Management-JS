import {
  renderClassModal,
  deleteClass,
  refreshClassSection,
  renderListModal,
  renderClassSection,
  makeActive,
  addEventListenersToClassSection,
  addLoadedClassToCards,
  showDeleteSweetAlert,
} from "../../../src/index.js";

function handleAddClassClick() {
  renderClassModal(null, refreshClassSection);
}
function handleEditClass(itemId) {
  renderClassModal(itemId, refreshClassSection);
}
function handleDeleteClass(itemId) {
  showDeleteSweetAlert(itemId, deleteClass, refreshClassSection);
}
function handleClassesListClick(itemId, text) {
  renderListModal(itemId, text);
}

function handleStudentsListClickFromClass(itemId, text, isTeacher = false) {
  renderListModal(itemId, text, isTeacher);
}

function handleClassesLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderClassSection();
  makeActive(event);
  addEventListenersToClassSection();
  addLoadedClassToCards();
}

export {
  handleAddClassClick,
  handleEditClass,
  handleDeleteClass,
  handleClassesListClick,
  handleStudentsListClickFromClass,
  handleClassesLinkClick,
};
