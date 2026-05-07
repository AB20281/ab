
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
    
    const hour = now.getHours();
    const greetingMsg = document.getElementById('dynamic-greeting');
    
    if (hour < 12) greetingMsg.textContent = "Good Morning, Absher!";
    else if (hour < 18) greetingMsg.textContent = "Good Afternoon, Absher!";
    else greetingMsg.textContent = "Good Evening, Absher!";
}
setInterval(updateClock, 1000);
updateClock();


const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = toggleBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});


let timeLeft = 25 * 60;
let timerId = null;
const timerDisplay = document.getElementById('timer-display');
const timerBtn = document.getElementById('timer-btn');

timerBtn.addEventListener('click', () => {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        timerBtn.textContent = "Resume";
        timerBtn.style.background = "#4a90e2";
    } else {
        timerBtn.textContent = "Pause";
        timerBtn.style.background = "#e74c3c";
        timerId = setInterval(() => {
            timeLeft--;
            const mins = Math.floor(timeLeft / 60);
            const secs = timeLeft % 60;
            timerDisplay.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
            if (timeLeft <= 0) {
                clearInterval(timerId);
                alert("Session complete! Time for a break.");
            }
        }, 1000);
    }
});


const quotes = [
    "\"Art is the lie that enables us to realize the truth.\" - Picasso",
    "\"Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.\" - Ferris Bueller",
    "\"Every artist was first an amateur.\" - Ralph Waldo Emerson",
    "\"Great things are done by a series of small things brought together.\" - Van Gogh",
    "\"Wax on, wax off.\" - Mr. Miyagi"
];

document.getElementById('refresh-quote').addEventListener('click', () => {
    const quoteDisplay = document.getElementById('quote-display');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    quoteDisplay.style.opacity = 0;
    setTimeout(() => {
        quoteDisplay.textContent = randomQuote;
        quoteDisplay.style.opacity = 1;
    }, 200);


    const log = document.getElementById('activity-log');
    const newItem = document.createElement('li');
    newItem.innerHTML = `Generated inspiration <small>Just now</small>`;
    log.prepend(newItem);
});