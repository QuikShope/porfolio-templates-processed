const navSlide = () => {
  const header = document.querySelector("header");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav-list");
  const barsIcon = document.querySelector(".fa-bars");
  const timesIcon = document.querySelector(".fa-times");

  //Toggle Navb
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    header.classList.toggle("header-active");
    barsIcon.classList.toggle("hidden");
    timesIcon.classList.toggle("hidden");
  });
};

//Div Highlight//////////////////////

navSlide();

console.log(scrollY);


