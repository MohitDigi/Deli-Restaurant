const btn = document.querySelector("#side-menu");
const colorBtn = document.querySelector("#color-menu");

const palette = document.querySelector(".color-palette-icon");

const redbtn = document.querySelector(".red-color");
const greenbtn = document.querySelector(".green-color");
const yellowbtn = document.querySelector(".yellow-color");
const greybtn = document.querySelector(".grey-color");

//font variable

// Change color theme
const headerOverlay = document.querySelectorAll(".bg-overlay");
const colorChange = (color) => {
  console.log("this is button", color);
  headerOverlay.forEach((ele) => {
    ele.style.backgroundColor = color;
    ele.style.opacity = 0.08;
  });
};
// Color theme
redbtn.addEventListener("click", () => colorChange("red"));
greenbtn.addEventListener("click", () => colorChange("green"));
yellowbtn.addEventListener("click", () => colorChange("yellow"));
greybtn.addEventListener("click", () => colorChange("grey"));

//Font theme

// Toggle menu bar
const toggleMenu = () => {
  btn.style.display == "block"
    ? (btn.style.display = "none")
    : (btn.style.display = "block");
};
const onBlurChange = () => {
  btn.style.display = "none";
};
// Toggle Color menu bar
const toggleColorMenu = () => {
  colorBtn.style.display == "block"
    ? ((colorBtn.style.display = "none"))
    : ((colorBtn.style.display = "block"))
};
const onBlurColorChange = () => {
  colorBtn.style.display = "none";
};
 colorBtn.addEventListener('blur', () => colorBtn.style.display= "none");