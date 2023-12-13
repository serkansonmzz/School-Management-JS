const makeActive = (event) => {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
};
const customizeSelectBox = () => {
  $(".select2").select2({
    placeholder: "Select Items",
    dropdownParent: "#formArea",
    allowClear: true,
  });
};
function addLoadedClassToCards() {
  setTimeout(() => {
    document.querySelectorAll(".col-md-4 .card").forEach((card) => {
      card.classList.add("loaded");
    });
  }, 70);
}
export { makeActive, addLoadedClassToCards, customizeSelectBox };
