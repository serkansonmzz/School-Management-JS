const convertToBase64 = (file, callback) => {
  if (file.size > 1000000) {
    alert("The image is too large! Please select an image smaller than 1MB.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    callback(e.target.result);
  };
  reader.readAsDataURL(file);
};

window.handleImageUpload = (event) => {
  const file = event.target.files[0];
  const profileImage = document.getElementById("profileImage");
  convertToBase64(file, (base64Img) => {
    profileImage.src = base64Img;
  });
};

export { convertToBase64 };
