// Function to check quiz answers
function checkQuiz() {
    let score = 0;
    const answers = { q1: "b", q2: "c", q3: "a" }; // Correct answers

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    // Display result
    const resultDiv = document.getElementById("quizResult");
    resultDiv.classList.remove("d-none");
    resultDiv.innerHTML = `You scored ${score} out of 3!`;

    if (score === 3) {
        resultDiv.classList.add("alert-success");
        resultDiv.innerHTML += "<br>🎉 Great job!";
    } else if (score === 2) {
        resultDiv.classList.add("alert-warning");
        resultDiv.innerHTML += "<br>👍 Almost there, try again!";
    } else {
        resultDiv.classList.add("alert-danger");
        resultDiv.innerHTML += "<br>😕 Keep practicing!";
    }
}

// Function to navigate between lessons
function navigateTo(page) {
    window.location.href = page;
}

// Add event listeners when the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const target = this.getAttribute("href");
            if (target.startsWith("#")) {
                e.preventDefault();
                document.querySelector(target).scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
