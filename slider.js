const slider = document.getElementById("slider");
const numOfImg = slider.childElementCount;

let num = 0;

let sliding;

function setSLiding() {
  sliding = setInterval(() => {
    let check = slider.querySelector(".active");

    check === null &&
      ((num += 500),
      num <= (numOfImg - 1) * 500
        ? (slider.style.marginLeft = "-" + num + "px")
        : (num = -500));
  }, 3000);
}
window.onload = setSLiding();

function clear() {
  clearInterval(sliding);
}

slider.addEventListener("click", e => {
  e.target.classList.contains("active")
    ? e.target.classList.remove("active")
    : e.target.classList.add("active");
});
