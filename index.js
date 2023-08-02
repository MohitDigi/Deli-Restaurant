const btn = document.querySelector("#side-menu");

const redbtn = document.querySelector(".red-color");
const greenbtn = document.querySelector(".green-color");
const yellowbtn = document.querySelector(".yellow-color");

// Change color theme
const headerOverlay = document.querySelectorAll(".bg-overlay");
const colorChange = (color) => {
  console.log("this is button", color);
  headerOverlay.forEach((ele) => {
    ele.style.backgroundColor = color;
    ele.style.opacity = 0.08;
  })
};

redbtn.addEventListener("click", () => colorChange("red"));
greenbtn.addEventListener("click", () => colorChange("green"));
yellowbtn.addEventListener("click", () => colorChange("yellow"));

// Toggle menu bar
const toggleMenu = () => {
  btn.style.display == "block"
    ? (btn.style.display = "none")
    : (btn.style.display = "block");
};
const onBlurChange = () => {
  btn.style.display = "none";
};

const colorArray = [""];
