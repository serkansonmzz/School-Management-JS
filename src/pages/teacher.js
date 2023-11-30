import { getTeachers } from "../pages/index.js";

const renderTeacherSection = () => {
  const teacherData = getTeachers();

  const teacherSection = `
    <div id="content">
      <div class="container">
      <div class="row my-3">
      ${teacherData
        .map(
          (teacher) =>
            `<div class="col-md-4 mb-3">
              <div class="card shadow h-100 px-3">
                <div class="card-body">
                  <div class="d-flex justify-content-end mb-2">
                    <i data-id="${teacher.id}" class="bi bi-pencil-square mr-2 editTeacherButton"></i>
                    <i data-id="${teacher.id}" class="bi bi-dash-circle mr-2 deleteTeacherButton"></i>
                  </div>
                  <h5 class="card-title">${teacher.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${teacher.title}</h6>
                    <p class="card-text">
                      ${teacher.description}
                    </p>
                    <a href="#" class="card-link">Students</a>
                    <a href="#" class="card-link">Classes</a>
                </div>
              </div>
           </div>`
        )
        .join("")}
      </div>
    </div>
    </div>
    <div class="row mt-5">
    <div class="col text-center">
      <i data-bs-toggle="modal" data-bs-target="#formArea" id="addTeacherButton" class="bi bi-plus-circle addIcon"></i>
      <p class="text">Add new Teacher</p> 
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
  </div>
    `;

  return teacherSection;
};

export { renderTeacherSection };
