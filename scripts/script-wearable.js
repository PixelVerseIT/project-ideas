const ideas = [
    "Design a smartwatch with health monitoring features!",
    "Create a wearable device for real-time language translation!",
    "Develop a fitness tracker with personalized workout plans!",
    "Design smart glasses with augmented reality capabilities!",
    "Create a wearable device for stress detection and management!",
    "Develop a wearable tech accessory for virtual reality immersion!",
    "Build a smart glove for gesture-based control of devices!",
    "Design a wearable for monitoring environmental conditions!",
    "Create a wearable device for improving posture and ergonomics!",
    "Develop a wearable for enhancing sleep quality and patterns!"
];

const hours = [
    "Approx. 2 hours = 2 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 1 hour = 1 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 2 hours = 2 🎟️",
    "Approx. 7 hours = 7 🎟️"
];

let isTyping = false;
let typingTimeout;

function typeWriter(text, elementId, callback) {
    let i = 0;

    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            typingTimeout = setTimeout(typing, 50);
        } else {
            isTyping = false;
            if (callback) callback();
        }
    }

    document.getElementById(elementId).innerHTML = "";
    clearTimeout(typingTimeout);
    typing();
}

function generateIdea() {
    confetti();
    if (isTyping) return;
    isTyping = true;

    const minHours = parseInt(document.getElementById('minHours').value);
    const maxHours = parseInt(document.getElementById('maxHours').value);

    const filteredIdeas = ideas.filter((idea, index) => {
        const hourValue = parseInt(hours[index].match(/\d+/)[0]);
        return hourValue >= minHours && hourValue <= maxHours;
    });

    if (filteredIdeas.length === 0) {
        document.getElementById('idea').innerHTML = "No ideas found for the specified hours range.";
        document.getElementById('hours').innerHTML = "";
        isTyping = false;
        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
    const idea = filteredIdeas[randomIndex];
    const hour = hours[ideas.indexOf(idea)];

    document.getElementById('idea').innerHTML = "";
    document.getElementById('hours').innerHTML = "";

    typeWriter(idea, 'idea', function() {
        typeWriter(` ${hour}`, 'hours');
    });
}
