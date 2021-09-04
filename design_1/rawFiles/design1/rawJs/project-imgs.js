let thumbnails = document.getElementsByClassName("thumbnail");

let activeImages = document.getElementsByClassName("active");

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {

    if (activeImages.length > 0) {
      activeImages[0].classList.remove("active");
    }

    this.classList.add("active");
    document.getElementById("featured").src = this.src;
  });
}

let modal = document.querySelector(".project-modal");
let openModal = document.querySelectorAll(".open-modal");
let closeModal = document.querySelector(".close-modal");
for (var i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", () => {
    modal.classList.toggle("hidden");
  });
}

closeModal.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});
