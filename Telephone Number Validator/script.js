const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", function() {
    if (userInput.value.trim() === "") {
        alert("Please provide a phone number");
        return;
    }

    const phoneNumber = userInput.value;
    let isValid = false;


    const validFormats = {
        format1: /^1 \d{3}-\d{3}-\d{4}$/,                  // 1 555-555-5555
        format2: /^1 \(\d{3}\) \d{3}-\d{4}$/,             // 1 (555) 555-5555
        format3: /^\d{10}$/,                               // 5555555555
        format4: /^\d{3}-\d{3}-\d{4}$/,                   // 555-555-5555
        format5: /^\(\d{3}\)\d{3}-\d{4}$/,                // (555)555-5555
        format6: /^1\(\d{3}\)\d{3}-\d{4}$/,               // 1(555)555-5555
        format7: /^1 \d{3} \d{3} \d{4}$/                  // 1 555 555 5555
    };

    // caractères spéciaux non autorisés
    if (/[^0-9\s()\-]/.test(phoneNumber)) {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
        return;
    }

    const invalidFormats = [
        /\(\d{3}\)\d{1}\(\d{2}\?\)-\d{4}/,     // (555)5(55?)-5555
        /^11/,                                  // 11 555-555-5555
        /\d{2}\s\d{2}-\d{2}-\d{3}-\d{1}/,      // 55 55-55-555-5
        /^[2-9]\(\d{3}\)/,                     // 2(757)
        /^0\s\(\d{3}\)/,                       // 0 (757)
        /^[2-9]\s\d{3}\s/                      // 2 757
    ];

    if (invalidFormats.some(pattern => pattern.test(phoneNumber))) {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
        return;
    }

    // Vérifie si c'est un format valide
    isValid = Object.values(validFormats).some(regex => regex.test(phoneNumber));

    resultsDiv.textContent = `${isValid ? "Valid" : "Invalid"} US number: ${phoneNumber}`;
});

clearBtn.addEventListener("click", function() {
    userInput.value = "";
    resultsDiv.textContent = "";
});