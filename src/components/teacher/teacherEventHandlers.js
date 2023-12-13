import {
  renderTeacherModal,
  deleteTeacher,
  refreshTeacherSection,
  renderListModal,
  renderTeacherSection,
  makeActive,
  addEventListenersToTeacherSection,
  addLoadedClassToCards,
} from "../../../src/index.js";

function handleAddTeacherClick() {
  renderTeacherModal(null, refreshTeacherSection);
}

function handleEditTeacher(itemId) {
  renderTeacherModal(itemId, refreshTeacherSection);
}

function handleDeleteTeacher(itemId) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteTeacher(itemId);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      refreshTeacherSection();
    }
  });
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
