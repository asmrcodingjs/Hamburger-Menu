const nav__btn = document.querySelector(".nav__btn")
const nav__btnLine = document.querySelector(".nav__btn-line")

nav__btn.addEventListener("click", () => {
    nav__btnLine.classList.toggle("active")
})