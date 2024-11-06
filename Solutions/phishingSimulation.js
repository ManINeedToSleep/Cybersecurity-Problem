// Toggle View Buttons
const generalViewBtn = document.getElementById("general-view-btn");
const emailViewBtn = document.getElementById("email-view-btn");

// Display Containers
const scenarioDisplay = document.getElementById("scenario-display");
const emailSimulation = document.getElementById("email-simulation");

// Toggle to General View
generalViewBtn.addEventListener("click", () => {
    scenarioDisplay.style.display = "block";
    emailSimulation.style.display = "none";
});

// Toggle to Email View
emailViewBtn.addEventListener("click", () => {
    scenarioDisplay.style.display = "none";
    emailSimulation.style.display = "block";
});

// Checking answer for general view
document.getElementById("right-btn").onclick = () => checkAnswer(true);
document.getElementById("wrong-btn").onclick = () => checkAnswer(false);

// Checking answer for email view
document.getElementById("right-btn-email").onclick = () => checkAnswer(true);
document.getElementById("wrong-btn-email").onclick = () => checkAnswer(false);

function checkAnswer(isPhishing) {
    const explanation = document.getElementById("explanation");

    if (isPhishing) {
        alert("Correct! This is a phishing attempt.");
        // Load next scenario or reset if necessary
    } else {
        explanation.innerText = "This is a phishing attempt. Notice the urgent language and suspicious link.";
        document.getElementById("feedback").style.display = "block";
    }
}

function closeFeedback() {
    document.getElementById("feedback").style.display = "none";
}
