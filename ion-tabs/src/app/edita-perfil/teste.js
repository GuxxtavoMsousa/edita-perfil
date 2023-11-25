function exibirImagem() {
    const fileInput = document.getElementById('foto');
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const image = new Image();
        image.src = e.target.result;
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = '';
        imageContainer.appendChild(image);
      };
      reader.readAsDataURL(file);
    }
  }