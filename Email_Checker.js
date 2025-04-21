document.querySelector(".input-email").addEventListener("input", () => {
    CheckInputEmail();
});

function CheckInputEmail() {
    const input = document.querySelector(".input-email")
    const errorMessage = document.querySelector(".error-message-email");
    const email = input.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() == "" || emailRegex.test(email)) {
        errorMessage.style.display = "none";
    }
    else {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Invalid email address";
    }

}