const ideas = [
    "Build a smart mirror with weather and news updates!",
    "Create a home automation system with voice control!",
    "Design a wearable fitness tracker!",
    "Build a portable phone charger with solar panels!",
    "Create a smart doorbell with video capabilities!",
    "Design a robotic arm controlled by a smartphone!",
    "Build a smart irrigation system for gardens!",
    "Create a drone for aerial photography!",
    "Design a custom mechanical keyboard!",
    "Build a home security system with sensors!",
    "Create a smart thermostat with remote control!",
    "Design a 3D printer from scratch!",
    "Build an automated pet feeder!",
    "Create a voice-controlled personal assistant!",
    "Design a smart lighting system with mood settings!",
    "Build a weather station with sensors!",
    "Create a smart alarm clock with weather updates!",
    "Design a Bluetooth-enabled speaker system!",
    "Build a portable air quality monitor!",
    "Create a smart home energy management system!"
];

const hours = [
    "Approx. 10 hours = 10 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 10 hours = 10 🎟️",
];

function generateIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const idea = ideas[randomIndex];
    const hour = hours[randomIndex];
    document.getElementById('idea').innerText = idea;
    document.getElementById('hours').innerText = hour;
}
