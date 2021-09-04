const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav-list");
  const navLinks = document.querySelectorAll("main-nav-link");
  //Toggle Navb
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  //Animate links
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
  });
};

//Div Highlight//////////////////////

navSlide();


// project-imgs.js
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


// scroll-hglt.js
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".main-nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("btn-cta");
    if (li.classList.contains(current)) {
      li.classList.add("btn-cta");
    }
  });
});

