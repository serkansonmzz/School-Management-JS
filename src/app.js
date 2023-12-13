import {
  renderNavbar,
  renderDashboard,
  renderFooter,
  checkLoginStatus,
  renderLoginPage,
  loginSubmitEventListener,
  navigationLinks,
  addLoadedClassToCards,
  initializeData,
} from "./index.js";

function initializeApp() {
  document.addEventListener("DOMContentLoaded", () => {
    const appRoot = document.querySelector("#app");

    if (!appRoot) {
      console.error("App root not found");
      return;
    }

    const isLoggedIn = checkLoginStatus();

    if (isLoggedIn) {
      appRoot.innerHTML = renderNavbar() + renderDashboard() + renderFooter();
      addLoadedClassToCards();
    } else {
      appRoot.innerHTML = renderLoginPage();
      loginSubmitEventListener();
    }

    navigationLinks();

    initializeData();
  });
}

initializeApp();
