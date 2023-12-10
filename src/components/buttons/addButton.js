const createAddButton = (text) => {
  const addButton = `
          <div class="row mt-5">
            <div class="col text-center">
              <i
                data-bs-toggle="modal"
                data-bs-target="#formArea"
                id="add${text}Button"
                class="bi bi-plus-circle addIcon"
              ></i>
              <p class="text">Add new ${text}</p>
            </div>
         </div>
      `;
  return addButton;
};

export { createAddButton };
