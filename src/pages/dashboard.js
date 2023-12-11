import {
  totalClassCount,
  totalStudentCount,
  totalTeacherCount,
  getFromSessionStorage,
} from "./index.js";

const renderDashboard = () => {
  const studentsCount = totalStudentCount();
  const teachersCount = totalTeacherCount();
  const classesCount = totalClassCount();
  const loggedUserName = getFromSessionStorage("isLoggedIn");

  const content = `
  <div class="container mt-5">
  <div id="content">
    <div class="row">
      <div class="col-12">
        <h1 class="display-6">
           Welcome ${loggedUserName.split(" ")[0]}
        </h1>
      </div>
    </div>
    <!-- Cards -->
    <div class="row text-center mt-5">
      <div class="col-md-4 mb-3">
        <div class="card shadow h-100 d-flex">
          <div class="card-body">
            <h5 class="card-title">${studentsCount}</h5>
            <p class="card-text">number of students</p>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="col-md-4 mb-3">
        <div class="card shadow h-100">
          <div class="card-body">
            <h5 class="card-title">${teachersCount}</h5>
            <p class="card-text">number of teachers</p>
          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="col-md-4 mb-3">
        <div class="card shadow h-100">
          <div class="card-body">
            <h5 class="card-title">${classesCount}</h5>
            <p class="card-text">number of classes</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card my-4">
      <div class="card-body">
        <h5 class="card-title">HiCoder 23/24 LMS</h5>
        <p class="card-text">
          Our LMS platform is designed with the flexibility and scalability
          to accommodate the learning needs of any size organization. It’s
          user-friendly, fully customizable, and packed with features to
          enhance your learning experience.
        </p>
      </div>
    </div>
  </div>
</div>
  `;

  return content;
};

export { renderDashboard };
