import {
  manageShowModal,
  exposeModal,
  getClassById,
  saveClass,
  updateClass,
  getStudents,
  getTeachers,
  customizeSelectBox,
} from "../../../src/index.js";

let isEdit;

export const renderClassModal = (
  classId = null,
  refreshClassSection = null
) => {
  isEdit = classId != null;
  const modalTitle = isEdit ? "Edit Class" : "Add new Class";
  const classData = isEdit ? getClassById(classId) : {};

  if (!classData && isEdit) {
    console.error("Class data not found");
    alert("Class not found.");
    return;
  }

  const modalHtml = createClassModalHtml(modalTitle, classData);

  manageShowModal(modalHtml, "#formArea");

  //select2
  customizeSelectBox();

  //!Class form submit EventListener
  const modalElement = document.querySelector("#formArea");

  addEventListenerClassSubmit(modalElement, classId, refreshClassSection);
};

const addEventListenerClassSubmit = (
  modalElement,
  classId,
  refreshClassSection
) => {
  modalElement.addEventListener("submit", (event) => {
    if (event.target && event.target.id === "classForm") {
      event.preventDefault();

      const formData = new FormData(event.target);
      const profileImage = document.getElementById("profileImage");
      formData.append("img", profileImage.src);

      const classInfoForm = {
        name: formData.get("name"),
        description: formData.get("description"),
        title: formData.get("title"),
        students: formData.getAll("students").map(Number),
        teachers: formData.getAll("teachers").map(Number),
        img: profileImage.src,
      };

      let errors = validateClassData(classInfoForm);

      if (Object.keys(errors).length === 0) {
        try {
          if (isEdit) {
            updateClass(classId, classInfoForm);
            showSweetAlert("Class updated successfully!", "success");
          } else {
            saveClass(classInfoForm);
            showSweetAlert("Class saved successfully!", "success");
          }
          exposeModal("#formArea");
          refreshClassSection();
        } catch (error) {
          console.error("An error occurred:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Error: ${error.message || "Unknown error occurred."}`,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Validation Error",
          text: Object.values(errors).join("\n"),
        });
      }
    }
  });
};

const validateClassData = (data) => {
  let errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (data.name.length < 3) errors.name = "Name must be at least 3 characters";
  if (!data.description.trim()) errors.description = "Description is required";
  if (data.students.length === 0)
    errors.students = "At least one student must be selected";
  if (data.teachers.length === 0)
    errors.teachers = "At least one teacher must be selected";

  return errors;
};

const createStudentSelectHtml = (isEdit, classData, allStudentData) => {
  const studentOptions = allStudentData
    .map((pstudent) => {
      const isSelected = isEdit && classData.students.includes(pstudent.id);
      return `<option value="${pstudent.id}" ${isSelected ? "selected" : ""}>${
        pstudent.name
      }</option>`;
    })
    .join("");

  return `
    <div>
      <label for="students">Students</label>
        <select style="width:75%" multiple="multiple" name="students" class="form-control select2" id="students">
          <option value="">Multiple Selection</option>
          ${studentOptions}
        </select>
    </div>`;
};
const createTeacherSelectHtml = (isEdit, classData, allTeacherData) => {
  const teacherOptions = allTeacherData
    .map((pteacher) => {
      const isSelected = isEdit && classData.teachers.includes(pteacher.id);
      return `<option value="${pteacher.id}" ${isSelected ? "selected" : ""}>${
        pteacher.name
      }</option>`;
    })
    .join("");

  return `
      <div>
        <label for="teachers">Teachers</label>
        <select style="width:75%" multiple="multiple" name="teachers" class="form-control select2" id="teacherId">
          <option value="">Select Multiple</option>
          ${teacherOptions}
        </select>
      </div>
    `;
};
const createImageUploadHtml = (classData) => {
  return `
      <div class="card imgholder">
        <label for="img" class="upload">
          <input type="file" name="img" id="img" onchange="handleImageUpload(event)" />
          <i class="bi bi-plus-circle-dotted"></i>
        </label>
        <img
          src="${
            classData.img || "./img/class_images/programming-language.png"
          }"
          alt="Profile Image"
          width="200"
          height="200"
          class="img"
          id="profileImage"
        />
      </div>
    `;
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
            ${createImageUploadHtml(classData)}
            <div class="inputField">
              <div>
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" value="${
                  classData.name || ""
                }"  />
              </div>
              <div>
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" value="${
                  classData.title || "Unknown"
                }"  />
              </div>
              <div>
                <label for="description">Desc:</label>
                <input type="text" name="description" id="description"  value="${
                  classData.description || ""
                }"  />
              </div>
               ${createStudentSelectHtml(isEdit, classData, allStudentData)}
               ${createTeacherSelectHtml(isEdit, classData, allTeacherData)}
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
          <button type="submit" form="classForm" class="btn btn-primary submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
};
