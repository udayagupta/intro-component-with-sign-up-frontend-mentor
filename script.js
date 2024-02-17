let submit_btn = document.getElementById("submit-btn");
let input = document.querySelectorAll("input");
let inputs = Array.from(input);
let form = document.querySelector("form");


form.addEventListener('submit', (event)=> {
    event.preventDefault();

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    let error = document.querySelectorAll(".error");
    let errors = Array.from(error);

    let isValid = true;

    if (firstName.value.trim() === "") {
        isValid = false;
        firstName.style.border = " 2px solid hsl(0, 100%, 74%)";
        errors[0].style.display = "block";
        
    }

    if (lastName.value.trim() === "") {
        isValid = false;
        lastName.style.border = " 2px solid hsl(0, 100%, 74%)";
        errors[1].style.display = "block";

    }

    if (!isValidEmail(email.value.trim())) {
        isValid = false;
        email.style.border = " 2px solid hsl(0, 100%, 74%)";
        errors[2].style.display = "block";

    }

    if (password.value.trim() === "") {
        isValid = false;
        password.style.border = " 2px solid hsl(0, 100%, 74%)";
        errors[3].style.display = "block";
        
    }

    if (isValid) {
        form.submit()
    }
})


function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
