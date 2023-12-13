import {
  renderStudentModal,
  deleteStudent,
  refreshStudentSection,
  renderStudentSection,
  makeActive,
  addEventListenersToStudentSection,
  addLoadedClassToCards,
  showDeleteSweetAlert,
} from "../../../src/index.js";

function handleAddStudentClick() {
  renderStudentModal(null, refreshStudentSection);
}

function handleEditStudent(itemId) {
  renderStudentModal(itemId, refreshStudentSection);
}

function handleDeleteStudent(itemId) {
  showDeleteSweetAlert(itemId, deleteStudent, refreshStudentSection);
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
