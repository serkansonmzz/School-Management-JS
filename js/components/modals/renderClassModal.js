import { manageShowModal } from "../../helpers/utilize";

export const renderClassModal = (itemId = null) => {
  const isEdit = itemId != null;
  const modalTitle = isEdit ? "Edit Class" : "Add new Class";
  const classData = {}; // check isEdit ? .. // class edit business logic will come

  const modalHtml = createClassModalHtml(modalTitle, classData);

  manageShowModal(modalHtml);
};

const createClassModalHtml = (modalTitle, classData) => {
  return `
  <!-- Class modalı için HTML içeriği -->
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
            <label for="students">Students</label>
              <select multiple name="students" class="form-control" id="students">
                  <option value="">Select Option</option>
                  <option value="1">
                    Alex Johnson
                  </option>
                  <option value="2">
                    Mia Thompson
                  </option>
                  <option value="3">
                    Ryan Patel
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
