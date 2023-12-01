import {
  manageShowModal,
  exposeModal,
  getClasses,
  getTeacherById,
  getStudents,
  saveTeacher,
  updateTeacher,
} from "../../pages/index.js";

let isEdit;
export const renderTeacherModal = (
  teacherId = null,
  refreshTeacherSection = null
) => {
  isEdit = teacherId != null;
  const modalTitle = isEdit ? "Edit Teacher" : "Add new Teacher";
  const teacherData = isEdit ? getTeacherById(teacherId) : {};

  if (!teacherData && isEdit) {
    console.error("Teacher data not found");
    alert("Teacher not found.");
    return;
  }

  const modalHtml = createTeacherModalHtml(modalTitle, teacherData);

  manageShowModal(modalHtml);

  //!Teacher Submit operations
  const modalElement = document.querySelector("#formArea");

  modalElement.addEventListener("submit", (event) => {
    if (event.target && event.target.id === "teacherForm") {
      event.preventDefault();

      const formData = new FormData(event.target);

      const addedTeacher = {
        name: formData.get("name"),
        title: formData.get("title"),
        description: formData.get("description"),
        classes: formData.getAll("classes"),
        students: formData.getAll("students"),
      };

      const errors = validateTeacherData(addedTeacher);

      if (Object.keys(errors).length === 0) {
        try {
          isEdit
            ? updateTeacher(teacherId, addedTeacher)
            : saveTeacher(addedTeacher);
          alert(`Teacher successfully ${isEdit ? "updated" : "added"}!`);
          exposeModal();
          refreshTeacherSection();
        } catch (error) {
          console.error("An error occurred:", error);
          alert(`Error: ${error.message || "Unknown error occurred."}`);
        }
      } else {
        alert("Validations Errors : " + Object.values(errors).join("\n"));
      }
    }
  });
};

const validateTeacherData = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (data.name.length < 3) errors.name = "Name must be at least 3 characters";
  if (!data.description.trim()) errors.description = "Description is required";
  if (!data.title.trim()) errors.title = "Title is required";
  if (data.classes.length === 0)
    errors.classes = "at least one class must be selected";
  if (data.students.length === 0)
    errors.students = "at least one student must be selected";

  return errors;
};

const createTeacherModalHtml = (modalTitle, teacherData) => {
  const allClassData = getClasses();
  const allStudentData = getStudents();
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
        <form action="#" id="teacherForm">
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
                teacherData.name || ""
              }" />
            </div>
            <div>
              <label for="title">Title:</label>
              <input type="text" name="title" id="title" value="${
                teacherData.title || ""
              }"  />
            </div>
            <div>
              <label for="description">Desc:</label>
              <input type="text" name="description" id="description" value="${
                teacherData.description || ""
              }" />
            </div>
            <div>
              <label for="classes">Classes</label>
                <select multiple name="classes" class="form-control" id="classId">
                    <option value="">Select Multiple</option>
                  ${allClassData
                    .map((pclass) => {
                      const isSelected =
                        isEdit && teacherData.classes.includes(pclass.id);
                      return `<option value="${pclass.id}" ${
                        isSelected ? "selected" : ""
                      }>${pclass.name}</option> `;
                    })
                    .join("")}
                </select>
            </div>
            <div>
              <label for="classes">Students</label>
                <select multiple name="students" class="form-control" id="classId">
                    <option value="">Select Multiple</option>
                  ${allStudentData
                    .map((pstudent) => {
                      const isSelected =
                        isEdit && teacherData.students.includes(pstudent.id);
                      return `<option value="${pstudent.id}" ${
                        isSelected ? "selected" : ""
                      }>${pstudent.name}</option> `;
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
        <button type="submit" form="teacherForm" class="btn btn-primary submit">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
`;
};
