console.log(`Hello`);

// 740
let sideMenu = document.querySelector(`.sideMenu`);
let item = sideMenu.children[0].children;
console.log(item);

function removeHigh() {
  for (let i = 0; i < 4; i++) {
    item[i].classList.remove("high");
  }
}

window.onscroll = () => {
  var topHeight = window.scrollY;
  console.log(topHeight);
  if ((topHeight >= 700) & (topHeight < 1479)) {
    sideMenu.classList.remove("topColor");
    sideMenu.classList.add("bottomColor");
    removeHigh();
    item[1].classList.add("high");
  } else if ((topHeight >= 1479) & (topHeight < 2092)) {
    sideMenu.classList.remove("topColor");
    sideMenu.classList.add("bottomColor");
    removeHigh();
    item[2].classList.add("high");
  } else if (topHeight >= 2092) {
    sideMenu.classList.remove("topColor");
    sideMenu.classList.add("bottomColor");
    removeHigh();
    item[3].classList.add("high");
  } else {
    sideMenu.classList.add("topColor");
    sideMenu.classList.remove("bottomColor");
    removeHigh();
  }
};
