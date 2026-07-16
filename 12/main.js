const rateButtons = document.querySelectorAll(".rate_button button");
const submitButton = document.getElementById("submit_button");
const selectedNum = document.getElementById("selected_value");

const ratingState = document.querySelector(".rating_state");
const thankYouState = document.querySelector(".thank_you_state");

let rating = "";

rateButtons.forEach(button => {
    button.addEventListener("click", () => {

        rateButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        rating = button.textContent;
        selectedNum.textContent = rating;
    });
});

submitButton.addEventListener("click", () => {
    if (rating === "") {
        return;
    }
    ratingState.classList.add("hidden");
    thankYouState.classList.add("active");
});