const manageShowModal = (modalHtml, modalId) => {
  const existingModal = document.querySelector(modalId);
  if (existingModal) {
    new bootstrap.Modal(existingModal).show();
  } else {
    document.body.insertAdjacentHTML("beforeend", modalHtml);
    //must be in the html structure before eventListener
    const createdModal = document.querySelector(modalId);
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

const exposeModal = (modalId) => {
  const createdModal = document.querySelector(modalId);
  if (!createdModal) return;

  const modalInstance = bootstrap.Modal.getInstance(createdModal);
  if (modalInstance) {
    modalInstance.hide();
  }

  createdModal.addEventListener("hidden.bs.modal", () => {
    createdModal.remove();
  });
};

export { manageShowModal, exposeModal };
