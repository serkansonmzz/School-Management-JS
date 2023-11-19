import { manageShowModal } from "../../helpers/utilize.js";
export const renderTeacherModal = () => {
  const isEdit = studentId !== null;
  const modalTitle = isEdit ? "Edit Teacher" : "Add New Teacher";
  const teacherData = {}; // check isEdit ? .. // teacher edit business logic will come

  const modalHtml = createTeacherModalHtml(modalTitle, teacherData);

  manageShowModal(modalHtml);
};

const createTeacherModalHtml = (modalTitle, teacherData) => {
  return `
    <div class="modal fade" id="formArea">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">${modalTitle}</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="#" id="myForm">
            <div class="card imgholder">
              <label for="img" class="upload">
                <input type="file" name="img" id="img" />
                <i class="bi bi-plus-circle-dotted"></i>
              </label>
              <img
                src="../img/Profile_Icon.webp"
                alt=""
                width="200"
                height="200"
                class="img"
              />
            </div>
            <div class="inputField">
              <div>
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div>
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" required />
              </div>
              <div>
                <label for="description">Desc:</label>
                <input type="text" name="description" id="description" />
              </div>
  
              <div>
              <label for="classes">Classes</label>
                <select multiple name="classes" class="form-control" id="classes">
                    <option value="">Select Option</option>
                    <option value="Advanced Cloud Technologies">
                      Advanced Cloud Technologies
                    </option>
                    <option value="Javascript Deep Dive">
                      Javascript Deep Dive
                    </option>
                    <option value="Mobile Technologies">
                      Mobile Technologies
                    </option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            id="modalCloseButton"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" form="myForm" class="btn btn-primary submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
};
