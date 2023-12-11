import { getFromSessionStorage } from "../../pages/index.js";
const renderNavbar = () => {
  const loggedUserName = getFromSessionStorage("isLoggedIn");
  const navbar = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <div class="d-flex justify-content-between align-items-center mt-3">
              <a class="navbar-brand" href="./index.html">
              <img src="../../img/logo/manual-book.png" class="card-img-top logo" alt="Logo"/>
              <span id="span_first">S</span><span id="span_second">M</span><span id="span_thirt">S</span>
              </a>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" id="dashboardLink" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="classesLink" href="#">Classes</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="teachersLink" href="#">Teachers</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="studentsLink" href="#">Students</a>
                </li>
            </ul>
            </div>
            <div class="dropdown">
              <a class="btn dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img width="45" src="./img/profile_images/user_3.png" alt="profile photo" />
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">${loggedUserName}</a></li>
                <li><a class="dropdown-item" id="dropdown-item" onclick="logOut()" href="#">Log Out</a></li>
              </ul>
            </div>
            </div>
          </nav>`;
  return navbar;
};

window.logOut = () => {
  sessionStorage.clear();
  window.location.reload();
};

export { renderNavbar };
