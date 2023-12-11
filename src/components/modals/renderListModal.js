import {
  getTeachersForClass,
  getStudentsForClass,
  getClassesForTeacher,
  getStudentsForTeacher,
  manageShowModal,
} from "../../pages/index.js";

export const renderListModal = (itemId, text, isTeacher = false) => {
  const modalData = getModalData(itemId, text, isTeacher);
  const modalHtml = createListModalHtml(text, modalData);
  manageShowModal(modalHtml, "#infoModal");
};

const getModalData = (itemId, text, isTeacher) => {
  switch (text) {
    case "Student":
      return isTeacher
        ? getStudentsForTeacher(itemId)
        : getStudentsForClass(itemId);
    case "Teacher":
      return getTeachersForClass(itemId);
    case "Class":
      return getClassesForTeacher(itemId);
    default:
      console.info("Invalid text type or empty modal data");
      return [];
  }
};

const createListModalHtml = (text, modalData) => {
  const teacherModal = `
        <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="infoModalLabel">${text} List</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <table class="table table-hover">
                <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Title</th>
                      <th scope="col">Desc</th>
                    </tr>
                </thead>
                <tbody id="modal-table-body">
                ${modalData
                  .map((item, index) => {
                    return `
                   <tr>
                      <th scope="row">${index + 1}</th>
                      <td><img src="${item.img}" alt="${
                      item.name
                    }" width="70px" /></td>
                      <td>${item.name}</td>
                      <td>${item.title}</td>
                      <td>${item.description}</td>
                   </tr>
                  `;
                  })
                  .join("")}
                </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
  `;
  return teacherModal;
};
