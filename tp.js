const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is fun and easy to learn."
];

const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const errorsElement = document.getElementById("errors");
const startButton = document.getElementById("start");
let startTime, errors = 0;
function startTest() {
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceElement.textContent = randomSentence;
    inputElement.value = "";
    inputElement.disabled = false;
    inputElement.focus();
    errors = 0;
    errorsElement.textContent = "0";
    startTime = new Date();
    inputElement.addEventListener("input", function() {
        const typedText = this.value;
        errors = 0;
        for (let i = 0; i < typedText.length; i++) {
            if (typedText[i] !== randomSentence[i]) {
                errors++;
            }
        }

        errorsElement.textContent = errors
        if (typedText === randomSentence) {
            inputElement.disabled = true;
            alert(`Done! Errors: ${errors}`);
        }
    });
}

startButton.addEventListener("click", startTest);