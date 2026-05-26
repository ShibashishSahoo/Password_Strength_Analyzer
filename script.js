const passwordInput =
document.getElementById("password");

const strengthFill =
document.getElementById("strength-fill");

const strengthText =
document.getElementById("strength-text");

const analysisText =
document.getElementById("analysis-text");

passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    let score = 0;

    // Checks

    const length =
    password.length >= 8;

    const uppercase =
    /[A-Z]/.test(password);

    const lowercase =
    /[a-z]/.test(password);

    const number =
    /[0-9]/.test(password);

    const symbol =
    /[@$!%*?&]/.test(password);

    updateItem("length", length);
    updateItem("uppercase", uppercase);
    updateItem("lowercase", lowercase);
    updateItem("number", number);
    updateItem("symbol", symbol);

    if(length) score++;
    if(uppercase) score++;
    if(lowercase) score++;
    if(number) score++;
    if(symbol) score++;

    // Progress Bar

    strengthFill.style.width =
    (score * 20) + "%";

    // Text Update

    if(score <= 2){

        strengthText.innerHTML =
        "Weak Password ❌";

        analysisText.innerHTML =
        "Your password is weak. Add uppercase letters, numbers, symbols, and 8+ characters for better security.";

    }

    else if(score <= 4){

        strengthText.innerHTML =
        "Medium Password ⚡";

        analysisText.innerHTML =
        "Your password is moderately secure. Add more complexity for stronger protection.";

    }

    else{

        strengthText.innerHTML =
        "Strong Password 🔥";

        analysisText.innerHTML =
        "Excellent. Your password is highly secure and well protected against common attacks.";

    }

});

function updateItem(id, valid){

    const item =
    document.getElementById(id);

    if(valid){

        item.classList.add("valid");

    }

    else{

        item.classList.remove("valid");

    }

}