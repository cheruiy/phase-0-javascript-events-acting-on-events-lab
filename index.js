// Your code here
function moveDodgerLeft() {
    // Your code to move the dodger to the left
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Event listener code for moving left
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
            moveDodgerLeft();
        }
    });
});

//moveDodgerRight
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const windowWidth = window.innerWidth;
    const dodgerWidth = dodger.clientWidth;

    if (left + dodgerWidth < windowWidth) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
            moveDodgerRight();
        }
    });
});