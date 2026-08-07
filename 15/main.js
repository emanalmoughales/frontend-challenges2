const open = document.querySelector(".open_menu");
const close = document.querySelector(".close_menu");

open.addEventListener("click", () => {
    document.querySelector(".phone_menu").classList.remove("hidden");
    open.classList.add("hidden");
    close.classList.remove("hidden");
});

close.addEventListener("click", () => {
    document.querySelector(".phone_menu").classList.add("hidden");
    open.classList.remove("hidden");
    close.classList.add("hidden");
});
