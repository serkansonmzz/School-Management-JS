import {
  renderStudentModal,
  deleteStudent,
  refreshStudentSection,
  renderStudentSection,
  makeActive,
  addEventListenersToStudentSection,
  addLoadedClassToCards,
} from "../../../src/index.js";

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
    refreshStudentSection();
  }
}

function handleStudentsLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderStudentSection();
  makeActive(event);
  addEventListenersToStudentSection();
  addLoadedClassToCards();
}

export {
  handleAddStudentClick,
  handleEditStudent,
  handleDeleteStudent,
  handleStudentsLinkClick,
};
