document.querySelectorAll(".code-input").forEach((input) => {
    input.addEventListener("input", () => {
        CheckDigit(input);
    });
});

function CheckDigit(input) {
    let digit = input.value;

    // Keep only the first digit
    digit = digit.replace(/[^0-9]/g, "").slice(0, 1);

    input.value = digit;
}