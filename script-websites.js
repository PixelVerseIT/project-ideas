const ideas = [
    "You should create a personal blog website!",
    "Maybe create an online portfolio!",
    "Build a weather app or website!",
    "Design an online shop website!",
    "Create a task management tool for arcade!",
    "Make a social media dashboard!",
    "Build a recipe sharing website!",
    "Create a travel booking website!",
    "Develop a news site!",
    "Create a blog website!",
    "Develop a photography website!",
    "Build a poetry website!",
    "Create a movie booking website, with live updates!",
    "Design a website for a news service in HTML and CSS!",
    "Create a podcast directory website!",
    "Build a to-do list website with reminder notifications!",
    "Design a virtual resume or CV generator!",
    "Create a note-taking website with categories and search functionality!",
    "Build a calculator website with advanced features like unit conversion!",
    "Design a countdown timer for events or tasks!",
    "Create a simple chat website with real-time messaging!",
    "Build a quote generator with categories and sharing options!",
    "Design a recipe organizer with meal planning features!",
    "Create a budget tracker with expense categorization!",
    "Build a habit tracker website with streaks and motivational quotes!",
    "Design a book recommendation website with user reviews!",
    "Create a movie review website with star ratings and comments!",
    "Build a random joke generator with categories and share buttons!",
    "Design a portfolio website for a fictional artist or designer!",
];

const hours = [
    "Approx. 7 hours = 7 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 11 hours = 11 🎟️",
    "Approx. 11 hours = 11 🎟️",
    "Approx. 28 hours = 28 🎟️",
    "Approx. 2 hours = 2 🎟️",
    "Approx. 9 hours = 9 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 9 hours = 9 🎟️",
    "Approx. 11 hours = 11 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 13 hours = 13 🎟️",
    "Approx. 9 hours = 9 🎟️",
    "Approx. 6 hours = 6 🎟️",
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
    if (isTyping) return;
    isTyping = true;

    const randomIndex = Math.floor(Math.random() * ideas.length);
    const idea = ideas[randomIndex];
    const hour = hours[randomIndex];

    document.getElementById('idea').innerHTML = "";
    document.getElementById('hours').innerHTML = "";

    typeWriter(idea, 'idea', function() {
        typeWriter(` ${hour}`, 'hours');
    });
}