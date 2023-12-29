import {
  getClasses,
  createAddButton,
  createEditButton,
  addLoadedClassToCards,
  handleAddClassClick,
  handleEditClass,
  handleDeleteClass,
  handleStudentsListClickFromClass,
  handleTeachersListClick,
} from "../../../src/index.js";

export const renderClassSection = () => {
  const classData = getClasses();

  const classSection = `
    <div class="container">
      <div class="row my-3">
        ${createClassCards(classData)} 
      </div>
    </div>
      ${createAddButton("Class")}
    <div class="card my-4 mt-5">
      <div class="card-body mb-5">
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

  return classSection;
};

const createClassCards = (classData) => {
  return classData
    .map(
      (pclass) => `
        <div class="col-md-4 mb-3">
          <div class="card shadow h-100 px-3">
            <div class="d-flex justify-content-between align-items-center mt-3">
              <div class="img-container">
                <img src="${
                  pclass.img || "../../img/class_images/online-learning.png"
                }"
                class="card-img-top class-img" alt="Student">
              </div>
              ${createEditButton(pclass.id, "Class")}
            </div>
            <div class="card-body">
              <h5 class="card-title">${pclass.name || ""}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${pclass.title}</h6>
              <p class="card-text">${pclass.description || ""}</p>
              <div class="d-flex gap-2">
              <a href="#" data-id="${
                pclass.id
              }" class="card-link studentListBtn">Students</a>
              <a href="#" data-id="${
                pclass.id
              }" class="card-link teacherListBtn">Teachers</a>
              </div>
            </div>
          </div>
        </div>
        `
    )
    .join("");
};

export function refreshClassSection() {
  const contentElement = document.querySelector("#content");
  if (contentElement) {
    contentElement.innerHTML = renderClassSection();
    addEventListenersToClassSection();
    addLoadedClassToCards();
  } else {
    console.error("Content element not found");
  }
}

export function addEventListenersToClassSection() {
  const addClassButton = document.querySelector("#addClassButton");
  addClassButton.addEventListener("click", handleAddClassClick);

  const editClassButtons = document.querySelectorAll(".editClassButton");
  editClassButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () => handleEditClass(itemId));
  });

  const deleteClassButtons = document.querySelectorAll(".deleteClassButton");
  deleteClassButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () => handleDeleteClass(itemId));
  });

  const studentListButtons = document.querySelectorAll(".studentListBtn");
  studentListButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () =>
      handleStudentsListClickFromClass(itemId, "Student", false)
    );
  });

  const teacherListButtons = document.querySelectorAll(".teacherListBtn");
  teacherListButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () =>
      handleTeachersListClick(itemId, "Teacher")
    );
  });
}
