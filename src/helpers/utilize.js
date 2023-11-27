const makeActive = (event) => {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
};

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const manageShowModal = (modalHtml) => {
  const existingModal = document.querySelector("#formArea");
  if (existingModal) {
    new bootstrap.Modal(existingModal).show();
  } else {
    document.body.insertAdjacentHTML("beforeend", modalHtml);
    //must be in the html structure before eventListener
    const createdModal = document.querySelector("#formArea");
    const modalInstance = new bootstrap.Modal(createdModal);

    // Manage events when the modal is closed
    createdModal.addEventListener("hidden.bs.modal", () => {
      //'hidden.bs.modal' boostrap class
      modalInstance.dispose();
      createdModal.remove();
    });

    //show modal after all settings
    modalInstance.show();
  }
};

const exposeModal = () => {
  const createdModal = document.querySelector("#formArea");
  if (!createdModal) return;

  const modalInstance = bootstrap.Modal.getInstance(createdModal);
  if (modalInstance) {
    modalInstance.hide();
  }

  createdModal.addEventListener("hidden.bs.modal", () => {
    createdModal.remove();
  });
};

export {
  makeActive,
  getFromLocalStorage,
  saveToLocalStorage,
  manageShowModal,
  exposeModal,
};
