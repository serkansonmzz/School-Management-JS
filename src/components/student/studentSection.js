import {
  getStudents,
  getStudentAverageGrade,
  createAddButton,
  createEditButton,
  addLoadedClassToCards,
  handleAddStudentClick,
  handleEditStudent,
  handleDeleteStudent,
} from "../../../src/index.js";

export const renderStudentSection = () => {
  const studentData = getStudents();
  const StudentSection = `
    <div class="container">
        <div class="row my-3">
          ${createStudentCards(studentData)} 
        </div>
      </div>
      ${createAddButton("Student")}
      <div class="card my-4">
        <div class="card-body">
          <h5 class="card-title">HiCoder 23/24 LMS</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
        </div>
    </div>
      `;

  return StudentSection;
};

const createStudentCards = (studentData) => {
  return studentData
    .map(
      (student) => `
        <div class="col-md-4 mb-3">
          <div class="card shadow h-100 px-3">
            <div class="d-flex justify-content-between align-items-center mt-3">
              <div class="img-container">
                <img src="${
                  student.img || "../../img/profile_images/user_3.png"
                }" class="card-img-top"
                alt="Student">
              </div>
              ${createEditButton(student.id, "Student")}
            </div>
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${student.title}</h6>
              <p class="card-text">${student.description}</p>
              <p class="card-text avarage-grade">
                Average Grade: ${getStudentAverageGrade(student.id).toFixed(1)}
              </p>
            </div>
          </div>
        </div>
    `
    )
    .join("");
};

export function refreshStudentSection() {
  const contentElement = document.querySelector("#content");
  if (contentElement) {
    contentElement.innerHTML = renderStudentSection();
    addEventListenersToStudentSection();
    addLoadedClassToCards();
  } else {
    console.error("Content element not found");
  }
}

export function addEventListenersToStudentSection() {
  const addStudentButton = document.querySelector("#addStudentButton");
  addStudentButton.addEventListener("click", handleAddStudentClick);

  const editStudentButtons = document.querySelectorAll(".editStudentButton");

  editStudentButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () => handleEditStudent(itemId));
  });
  const deleteStudentButtons = document.querySelectorAll(
    ".deleteStudentButton"
  );
  deleteStudentButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () => handleDeleteStudent(itemId));
  });
}
