import { getClasses } from "../pages/index.js";

const renderClassSection = () => {
  const classData = getClasses();

  const classSection = `<div class="container">
      <div class="row my-3">
      ${classData
        .map(
          (pclass) => `
        <div class="col-md-4 mb-3">
          <div class="card shadow h-100 px-3">
          <div class="card-body">
            <div class="d-flex justify-content-end mb-2">
              <i data-id="${
                pclass.id
              }" class="bi bi-pencil-square mr-2 editClassButton"></i>
              <i data-id="${
                pclass.id
              }" class="bi bi-dash-circle mr-2 deleteClassButton"></i>
            </div>
            <h5 class="card-title">${pclass.name || ""}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${""}</h6>
            <p class="card-text">
            ${pclass.description || ""}
            </p>
            <a href="#" class="card-link">Students</a>
            <a href="#" class="card-link">Teachers</a>
          </div>
      </div>
    </div>`
        )
        .join("")}
      </div>
    </div>
    <div class="row mt-5">
    <div class="col text-center">
      <i data-bs-toggle="modal" data-bs-target="#formArea" id="addClassButton" class="bi bi-plus-circle addIcon"></i>
      <p class="text">Add new Class</p> 
    </div>
    </div>
  <div class="card my-4">
    <div class="card-body">
      <h5 class="card-title">HiCoder 23/24 LMS</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
      </p>
    </div>
  </div>`;

  return classSection;
};

export { renderClassSection };
