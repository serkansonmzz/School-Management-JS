import { getStudents, getStudentAverageGrade } from "../pages/index.js";

const renderStudentSection = () => {
  const allStudentData = getStudents();

  const StudentSection = `
  <div id="content">
      <div class="container">
        <div class="row my-3">
        ${allStudentData
          .map(
            (student) =>
              `<div class="col-md-4 mb-3">
                    <div class="card shadow h-100 px-3">
                      <div class="card-body">
                        <div class="d-flex justify-content-end mb-2">
                          <i class="bi bi-pencil-square mr-2 editStudentButton"></i>
                          <i class="bi bi-dash-circle mr-2 deleteStudentButton"></i>
                        </div>
                        <h5 class="card-title">${student.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${
                          student.title
                        }</h6>
                        <p class="card-text">
                        ${student.description}
                        </p>
                        <a href="#" class="card-link">Average Grade: ${getStudentAverageGrade(
                          student.id
                        ).toFixed(1)}</a>
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
    <i
      data-bs-toggle="modal"
      data-bs-target="#formArea"
      id="addStudentButton"
      class="bi bi-plus-circle addIcon"
    ></i>
    <p class="text">Add new Student</p>
  </div>
</div>
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

export { renderStudentSection };
