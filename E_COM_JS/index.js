const productBox = document.querySelector(".product-box")
const menuEl = document.querySelector("#menu");
const closeEl = document.querySelector("#close");
const navEl = document.querySelector(".nav");

menuEl.addEventListener("click", () => {
    closeEl.style.display = "block";
    menuEl.style.display = "none";
    navEl.classList.add("show");
})
closeEl.addEventListener("click", () => {
    navEl.classList.remove("show");
    menuEl.style.display = "block";
    closeEl.style.display = "none";
})






