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

