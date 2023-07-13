const circle = document.querySelector('.circle');
const textContainer = document.querySelector('.text-container');
const texts = [
    "Let's start",
    "Sit in a confortable position",
    "and take a deep breath",
    "Allow your body to relax and find a comfortable position",
    "As you continue to breathe deeply, bring your attention to the sensation of your breath entering and leaving your body",
    "Notice the gentle rise and fall of your chest or the sensation of air passing through your nostrils.",
    "Let go of any thoughts or distractions that arise and simply focus on the breath.",
    "If your mind wanders, gently bring it back to the present moment, to the sensation of breathing.",
    "Now, bring your attention to your body. Starting from the top of your head, scan down slowly, noticing any areas of tension or discomfort. As you become aware of these areas, imagine them melting away, releasing any stress or tightness.",
    "Continue to breathe deeply and relax. Allow a sense of calmness and peace to wash over you. Feel the weight of your body sinking into the ground, completely supported and at ease.",
    "Take a moment to express gratitude for this time of stillness and self-care.",
    "When you're ready, gently open your eyes and carry this sense of tranquility with you throughout your day.",
    "Remember, you can return to this practice whenever you need a moment of calm and clarity.",
    "Thank you for sharing this experience"
];

let index = 0;
let intervalId;
let currentLine = null;

function displayNextText() {
    if (currentLine) {
        textContainer.removeChild(currentLine);
    }

    if (index < texts.length) {
        const newLine = document.createElement('p');
        newLine.textContent = texts[index];
        newLine.classList.add('text-animation');
        textContainer.appendChild(newLine);
        currentLine = newLine;
        index++;
    } else {
        clearInterval(intervalId);
    }
}

circle.addEventListener('click', function() {
    if (index === 0) {
        displayNextText();
        intervalId = setInterval(displayNextText, 5000); // Display a new line every 5 seconds after the initial click
    }
});
