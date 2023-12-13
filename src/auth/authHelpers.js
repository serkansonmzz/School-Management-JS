function checkLoginStatus() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  return isLoggedIn !== null;
}
function getFromSessionStorage(key) {
  const userInfo = sessionStorage.getItem(key) || null;
  return userInfo;
}
window.logOut = () => {
  sessionStorage.clear();
  window.location.reload();
};

export { checkLoginStatus, getFromSessionStorage };
