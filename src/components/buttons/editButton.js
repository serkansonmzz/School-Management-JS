const createEditButton = (paramId, text) => {
  const editButton = `
        <div class="icon-container">
            <i
            data-id="${paramId}"
            class="bi bi-pencil-square mr-2 edit${text}Button"
            ></i>
            <i
            data-id="${paramId}"
            class="bi bi-dash-circle mr-2 delete${text}Button"
            ></i>
        </div>
    `;
  return editButton;
};

export { createEditButton };
