import {
  getTeachers,
  createAddButton,
  createEditButton,
} from "../pages/index.js";

const renderTeacherSection = () => {
  const teacherData = getTeachers();

  const teacherSection = `
  <div class="container">
      <div class="row my-3">
        ${teacherData
          .map(
            (teacher) => `
        <div class="col-md-4 mb-3">
          <div class="card shadow h-100 px-3">
            <div class="d-flex justify-content-between align-items-center mt-3">
              <div class="img-container">
                <img src="${
                  teacher.img || "../../img/profile_images/user_3.png"
                }" class="card-img-top"
                alt="Student">
              </div>
              ${createEditButton(teacher.id, "Teacher")}
            </div>
            <div class="card-body">
              <h5 class="card-title">${teacher.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${teacher.title}</h6>
              <p class="card-text">${teacher.description}</p>
              <a href="#" class="card-link">Students</a>
              <a href="#" class="card-link">Classes</a>
            </div>
          </div>
        </div>
        `
          )
          .join("")}
      </div>
    </div>
    ${createAddButton("Teacher")}
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

  return teacherSection;
};

export { renderTeacherSection };
