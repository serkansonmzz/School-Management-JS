import {
  getClasses,
  createAddButton,
  createEditButton,
} from "../pages/index.js";

const renderClassSection = () => {
  const classData = getClasses();

  const classSection = `
  <div class="container">
    <div class="row my-3">
      ${classData
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
            <a href="#" class="card-link">Students</a>
            <a href="#" class="card-link">Teachers</a>
          </div>
        </div>
      </div>
      `
        )
        .join("")}
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

export { renderClassSection };
