document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;
    const button = document.getElementById("btn");
    const span = document.getElementById("counter-text");

    button.addEventListener("click", () => {
        counter++;
        span.textContent = `Total clicks: ${counter}`;
    });
});
