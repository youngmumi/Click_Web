document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;
    const button = document.querySelector("#btn");
    const span = document.querySelector("#counter-text");

    button?.addEventListener("click", () => {
        span.textContent = `Total clicks: ${++counter}`;
    });
});

