const renderNavbar = () => {
  const navbar = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">SMS</a>
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
                <div class="loginBtn">
                    <img width="45" src="./img/profile.webp" alt="profile photo" />
                </div>
            </div>
          </nav>`;
  return navbar;
};

export { renderNavbar };
