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
const showSweetAlert = (text, icon) => {
  Swal.fire({
    position: "middle",
    icon: `${icon}`,
    title: `${text}`,
    showConfirmButton: false,
    timer: 2000,
  });
};
const showDeleteSweetAlert = (itemId, deleteFunction, refreshFunction) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteFunction(itemId);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      refreshFunction();
    }
  });
};

export {
  makeActive,
  addLoadedClassToCards,
  customizeSelectBox,
  showSweetAlert,
  showDeleteSweetAlert,
};
