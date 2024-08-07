const ideas = [
    "Compose a theme song for a video game!",
    "Create a remix of a popular song!",
    "Make a lo-fi chillhop track!",
    "Create an original soundtrack for a short film!",
    "Produce a hip-hop beat!",
    "Compose an orchestral piece using virtual instruments!",
    "Create an ambient soundscape!",
    "Produce a house music track!",
    "Remix a classic song with a modern twist!",
    "Create a podcast intro and outro music!",
    "Compose and produce a jingle for a commercial!",
    "Create a dubstep track with heavy bass!",
    "Produce a synthwave track with retro sounds!",
    "Compose a piece for a solo instrument!",
    "Create a meditative music track with nature sounds!",
    "Produce a dance track with catchy hooks!",
    "Create an acoustic version of an electronic song!",
    "Compose a musical score for a theater production!",
    "Create a mashup of two popular songs!",
    "Produce a reggae track with a laid-back vibe!"
];

const hours = [
    "Approx. 6 hours = 6 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 2 hours = 2 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 4 hours = 4 🎟️",
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
