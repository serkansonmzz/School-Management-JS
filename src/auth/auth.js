export const renderLoginPage = () => {
  return `
    <section class="mt-5">
    <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsl(0, 0%, 96%)">
      <div class="container">
        <div class="row gx-lg-5 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
          <h2 class="my-5 display-3 fw-bold ls-tight p-3 mb-5">
              Welcome Back ! <br />
              <span class="text-primary">Please Sign In to Continue SMS </span>
          </h2>
            <p style="color: hsl(217, 10%, 50.8%)" class="mb-4">
            This is a simple login page created for demonstration and showcase purposes. You can log in using the following 
            <br/> <span style="font-szie:15px;">password: </span> 
            <strong style="font-size: 16px; color: purple;"> Hicoders_2024</strong>  Give it a try.
            </p>
        </div>
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card">
              <div class="card-body py-5 px-md-5">
                <form id="loginForm">
                  <!-- 2 column grid layout with floating labels for the first and last names -->
                  <div class="row g-2">
                    <div class="col-md-6 mb-4">
                      <div class="form-floating">
                        <input type="text" name="firstname" id="floatingFirstName" class="form-control" placeholder="First name" />
                        <label for="floatingFirstName">First name</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-floating">
                        <input type="text" name="lastname" id="floatingLastName" class="form-control" placeholder="Last name" />
                        <label for="floatingLastName">Last name</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-floating mb-4">
                    <input type="password" name="password" id="floatingPassword" class="form-control" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="d-flex">
                    <button type="submit" class="ms-auto btn btn-primary btn-block mb-3">Sign In</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
};

export const loginSubmitEventListener = () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.target && e.target.id === "loginForm") {
      const formData = new FormData(e.target);

      const user = {
        firstName: formData.get("firstname").trim(),
        lastName: formData.get("lastname").trim(),
        password: formData.get("password").trim(),
      };

      if (user.password !== "Hicoders_2024") {
        alert("Incorrect password");
        return;
      }
      sessionStorage.setItem(
        "isLoggedIn",
        `${user.firstName} ${user.lastName}`
      );
      window.location.href = "./index.html";
    }
  });
};
