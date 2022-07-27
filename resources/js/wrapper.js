const wrapperButton = document.querySelector(".wrapper-button");
const wrapper = document.querySelector(".wrapper");


wrapperButton.addEventListener("click", () => {
  wrapperButton.classList.toggle("active");
  wrapper.classList.toggle("active");
})

document.querySelectorAll(".wrapper-button active").forEach(n => n.addEventListener("click", () => {
  wrapperButton.classList.remove("active");
  wrapper.classList.remove("active");
}))