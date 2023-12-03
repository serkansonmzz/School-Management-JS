import {
  manageShowModal,
  exposeModal,
  getStudentById,
  saveStudent,
  updateStudent,
  getClasses,
} from "../../pages/index.js";

let isEdit;
export const renderStudentModal = (
  studentId = null,
  refreshStudentSection = null
) => {
  isEdit = studentId !== null;
  const modalTitle = isEdit ? "Edit Student" : "Add New Student";
  const studentData = isEdit ? getStudentById(studentId) : {};

  if (!studentData && isEdit) {
    console.error("Student data not found");
    alert("Student not found.");
    return;
  }

  const modalHtml = createStudentModalHtml(modalTitle, studentData);

  manageShowModal(modalHtml);

  addGradeInputs();

  const modalElement = document.querySelector("#formArea");
  addEventListenerStudentSubmit(modalElement, studentId, refreshStudentSection);
};

const addEventListenerStudentSubmit = (
  modalElement,
  studentId,
  refreshStudentSection
) => {
  modalElement.addEventListener("submit", (event) => {
    if (event.target && event.target.id === "studentForm") {
      event.preventDefault();

      const formData = new FormData(event.target);

      const studentInfoForm = {
        name: formData.get("name"),
        title: formData.get("title"),
        description: formData.get("description"),
        classes: formData.getAll("classes").map(Number),
        grades: formData.getAll("grades").map(Number),
      };

      let errors = validateStudentData(studentInfoForm);

      if (Object.keys(errors).length === 0) {
        try {
          isEdit
            ? updateStudent(studentId, studentInfoForm)
            : saveStudent(studentInfoForm);
          alert(`Student successfully ${isEdit ? "updated" : "added"}!`);
          exposeModal();
          refreshStudentSection();
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

const validateStudentData = (data) => {
  let errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.title.trim()) errors.title = "Title is required";
  if (data.name.length < 3) errors.name = "Name must be at least 3 characters";
  if (!data.description.trim()) errors.description = "Description is required";
  if (data.classes.length === 0)
    errors.classes = "At least one class must be selected";
  if (data.grades.length < 2)
    errors.grades = "Grade must be entered at least 2";
  return errors;
};

const addGradeInputs = () => {
  const gradesContainer = document.getElementById("grades-container");

  gradesContainer.addEventListener("input", (event) => {
    const numberOfGrades = gradesContainer.querySelectorAll("input").length;
    const lastInput = gradesContainer.lastElementChild;
    if (
      numberOfGrades < 3 &&
      event.target.value &&
      event.target === lastInput
    ) {
      const newInput = document.createElement("input");
      newInput.type = "number";
      newInput.name = "grades";
      newInput.placeholder = `Grade ${numberOfGrades + 1}`;
      gradesContainer.appendChild(newInput);
    }
  });
};

const createGradesHtml = (isEdit, studentData) => {
  const gradesHtml =
    isEdit && studentData.grades
      ? studentData.grades
          .map(
            (grade, index) =>
              `<input type="number" name="grades" value="${grade}" placeholder="Grade ${
                index + 1
              }" style="margin-left:35px;" />`
          )
          .join("")
      : '<input type="number" name="grades" placeholder="Grade 1" style="margin-left:35px;" />';

  return `
    <div id="grades-container">
      <label for="grades">Grades:</label>
      ${gradesHtml}
    </div>
  `;
};

const createClassSelectHtml = (isEdit, allClassData, studentData) => {
  const classOptions = allClassData
    .map((pclass) => {
      const isSelected = isEdit && studentData.classes.includes(pclass.id);
      return `<option value="${pclass.id}" ${isSelected ? "selected" : ""}>${
        pclass.name
      }</option>`;
    })
    .join("");

  return `
    <div>
      <label for="classes">Classes</label>
      <select multiple name="classes" class="form-control" id="classes">
        <option value="">Select Multiple</option>
        ${classOptions}
      </select>
    </div>
    `;
};

const createStudentModalHtml = (modalTitle, studentData) => {
  const allClassData = getClasses();

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
          <form action="#" id="studentForm">
            <div class="card imgholder">
              <label for="img" class="upload">
                <input type="file" name="img" id="img" />
                <i class="bi bi-plus-circle-dotted"></i>
              </label>
              <img
                src="./img/Profile_Icon.webp"
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
                  studentData.name || ""
                }"  />
              </div>
              <div>
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" value="${
                  studentData.title || ""
                }" />
              </div>
              <div>
                <label for="description">Desc:</label>
                <input type="text" name="description" id="description" value="${
                  studentData.description || ""
                }" />
              </div>
              ${createGradesHtml(isEdit, studentData)}
              ${createClassSelectHtml(isEdit, allClassData, studentData)}
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
          <button type="submit" form="studentForm" class="btn btn-primary submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>`;
};
