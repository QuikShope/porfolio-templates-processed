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

