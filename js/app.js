function initializeApp() {
  document.addEventListener("DOMContentLoaded", () => {
    const appRoot = document.querySelector("#app");
    appRoot.innerHTML = renderNavbar() + renderDashboard() + renderFooter();
  });
}
