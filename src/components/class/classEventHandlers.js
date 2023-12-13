import {
  renderClassModal,
  deleteClass,
  refreshClassSection,
  renderListModal,
  renderClassSection,
  makeActive,
  addEventListenersToClassSection,
  addLoadedClassToCards,
} from "../../../src/index.js";

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
    refreshClassSection();
  }
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
