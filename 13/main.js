const blocks = document.querySelectorAll(".block");

blocks.forEach((block) => {
    block.addEventListener("click", () => {
        const answer = block.querySelector(".answer");
        const plus = block.querySelector(".icon-plus");
        const minus = block.querySelector(".icon-minus");

        const isOpen = answer.classList.contains("show");

        // Close all
        blocks.forEach((item) => {
            const itemAnswer = item.querySelector(".answer");

            itemAnswer.classList.remove("show");
            itemAnswer.style.maxHeight = null;

            item.querySelector(".icon-plus").classList.remove("hide");
            item.querySelector(".icon-minus").classList.add("hide");
        });

        // Open clicked one
        if (!isOpen) {
            answer.classList.add("show");
            answer.style.maxHeight = answer.scrollHeight + "px";

            plus.classList.add("hide");
            minus.classList.remove("hide");
        }
    });
});