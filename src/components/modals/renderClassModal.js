import { manageShowModal, exposeModal } from "../../pages/index.js";
import {
  getClassById,
  saveClass,
  updateClass,
} from "../../services/classService.js";

let isEdit;

export const renderClassModal = (itemId = null) => {
  isEdit = itemId != null;
  const modalTitle = isEdit ? "Edit Class" : "Add new Class";
  const classData = isEdit ? getClassById(classId) : {};

  if (!classData && isEdit) {
    console.error("Class data not found");
    alert("Class not found.");
    return;
  }

  const modalHtml = createClassModalHtml(modalTitle, classData);

  manageShowModal(modalHtml);

  //!Class form submit EventListener
  const modalElement = document.querySelector("#formArea");

  modalElement.addEventListener("submit", (event) => {
    if (event.target && event.target.id === "classForm") {
      event.preventDefault();

      const formData = new FormData(event.target);

      classInfoForm = {
        name: formData.get("name"),
        description: formData.get("description"),
        students: formData.getAll("students"),
        teacherId: formData.get("teacherId"),
      };

      const errors = validateClassData(classInfoForm);

      if (Object.keys(errors).length === 0) {
        try {
          isEdit
            ? updateClass(classId, classInfoForm)
            : saveClass(classInfoForm);
          alert(`Class successfully ${isEdit ? "updated" : "added"}!`);
          exposeModal();
          //! needed refresh content
        } catch (error) {
          console.error("An error occurred:", error);
          alert(`Error: ${error.message || "Unknown error occurred."}`);
        }
      } else {
        alert("Validations Errors : " + Object.values(errors).join(""));
      }
    }
  });
};

const validateClassData = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (data.name.length < 3) errors.name = "Name must be at least 3 characters";
  if (!data.description.trim()) errors.description = "Description is required";
  if (data.students.length === 0)
    errors.students = "At least one student must be selected";
  if (!data.teacherId) errors.teacherId = "Teacher must be selected";

  return errors;
};

const createClassModalHtml = (modalTitle, classData) => {
  let allStudentData = getStudents();
  let allTeacherData = getTeachers();

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
        <form action="#" id="classForm">
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
              <input type="text" name="name" id="name" value="${
                classData.name || ""
              }"  />
            </div>
            <div>
              <label for="description">Desc:</label>
              <input type="text" name="description" id="description"  value="${
                classData.description || ""
              }"  />
            </div>
            <div>
              <label for="students">Students</label>
                <select multiple name="students" class="form-control" id="students">
                    <option value="">Multiple Selection</option>
                    ${allStudentData
                      .map((student) => {
                        const isSelected =
                          isEdit && classData.students.includes(student.id);
                        return `<option value="${student.id}" ${
                          isSelected ? "selected" : ""
                        }>${student.name}</option> `;
                      })
                      .join("")}
                </select>
            </div>
            <div>
              <label for="students">Teacher</label>
              <select name="teacherId" class="form-control" id="teacherId">
                <option value="">multiple selections available</option>
                ${allTeacherData
                  .map((teacher) => {
                    const isSelected =
                      isEdit && classData.teacherId === teacher.id;
                    return `<option value="${teacher.id}" ${
                      isSelected ? "selected" : ""
                    }>${teacher.name}</option> `;
                  })
                  .join("")}
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
