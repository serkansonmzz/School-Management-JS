import {
  totalClassCount,
  totalStudentCount,
  totalTeacherCount,
  getFromSessionStorage,
  makeActive,
  addLoadedClassToCards,
} from "../../../src/index.js";

export const renderDashboard = () => {
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
        <div class="col-md-4 mb-3 dashboard-card">
          <div class="card shadow h-100">
            <div class="card-body d-flex flex-column justify-content-center" style="height: 150px;">
              <h5 class="card-title"><strong>${studentsCount}</h5></strong>
              <p class="card-text">number of students</p>
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="col-md-4 mb-3 dashboard-card">
          <div class="card shadow h-100">
            <div class="card-body d-flex flex-column justify-content-center" style="height: 150px;">
              <h5 class="card-title"><strong >${teachersCount}</h5></strong>
              <p class="card-text">number of teachers</p>
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="col-md-4 mb-3 dashboard-card">
          <div class="card shadow h-100">
            <div class="card-body d-flex flex-column justify-content-center" style="height: 150px;">
              <h5 class="card-title"><strong>${classesCount}</strong></h5>
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

export function handleDashboardLinkClick(event) {
  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = renderDashboard();
  makeActive(event);
  addLoadedClassToCards();
}
