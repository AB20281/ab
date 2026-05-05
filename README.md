<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Absher | Ultimate Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body class="light-mode">

    <header class="main-header">
        <div class="profile-container">
            <img src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=200&h=200" 
                 alt="Karate Kid" class="profile-img">
            <div>
                <h2 style="margin:0; font-size: 1.1rem;">Daniel LaRusso</h2>
                <small style="opacity: 0.7;">All Valley Champion</small>
            </div>
        </div>

        <div class="header-right">
            <div id="clock" class="digital-clock">00:00:00</div>
            <button id="theme-toggle" class="theme-btn">
                <i class="fas fa-moon"></i>
            </button>
        </div>
    </header>

    <main class="dashboard-grid">
        <div class="widget" style="grid-column: span 2;">
            <h2 id="dynamic-greeting" style="margin-top:0;">Hello, Absher!</h2>
            <p id="quote-display">"Wax on, wax off."</p>
            <div class="profile-container" style="margin-top: 15px;">
                <img src="https://m.media-amazon.com/images/M/MV5BMjIxNjI5MDAyOF5BMl5BanBnXkFtZTcwMTk2MjQ1Mw@@._V1_.jpg" alt="Absher" class="profile-img">
                <p class="bio" style="font-size: 0.9rem;">Creative Developer • Artist • Movie Buff</p>
            </div>
        </div>

        <div class="widget weather-widget">
            <h3><i class="fas fa-cloud-sun"></i> Weather</h3>
            <div style="font-size: 2rem; font-weight: bold;">22°C</div>
            <p>Partly Cloudy • New York, NY</p>
        </div>

        <div class="widget timer-widget">
            <h3><i class="fas fa-stopwatch"></i> Focus Timer</h3>
            <div id="timer-display" class="timer-display">25:00</div>
            <button id="timer-btn" class="action-btn">Start Session</button>
        </div>

        <div class="widget">
            <h3><i class="fas fa-link"></i> Quick Links</h3>
            <div class="link-grid">
                <a href="https://google.com" target="_blank" class="link-item">Google</a>
                <a href="https://github.com" target="_blank" class="link-item">GitHub</a>
                <a href="https://youtube.com" target="_blank" class="link-item">YouTube</a>
                <a href="https://spotify.com" target="_blank" class="link-item">Spotify</a>
            </div>
        </div>

        <div class="widget">
            <h3><i class="fas fa-bolt"></i> Quick Actions</h3>
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                <button class="theme-btn" title="Refresh Quote" id="refresh-quote"><i class="fas fa-sync-alt"></i></button>
                <button class="theme-btn" onclick="alert('Note Saved!')" title="New Note"><i class="fas fa-edit"></i></button>
                <button class="theme-btn" onclick="window.print()" title="Print Dashboard"><i class="fas fa-print"></i></button>
            </div>
        </div>

        <div class="widget">
            <h3><i class="fas fa-history"></i> Recent Activity</h3>
            <ul class="activity-list" id="activity-log">
                <li>Uploaded new project <small>2h ago</small></li>
                <li>Completed CSS lesson <small>5h ago</small></li>
            </ul>
        </div>
    </main>

    <script src="script.js"></script>
</body>
</html> 


 :root {
    --bg-color: #f0f2f5;
    --widget-bg: #ffffff;
    --text-color: #1a1a1a;
    --accent-color: #4a90e2;
    --shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.dark-mode {
    --bg-color: #121212;
    --widget-bg: #1e1e1e;
    --text-color: #e0e0e0;
    --accent-color: #bb86fc;
    --shadow: 0 4px 12px rgba(0,0,0,0.5);
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    transition: all 0.3s ease;
}

.main-header {
    padding: 1.5rem 2rem;
    background: var(--widget-bg);
    box-shadow: var(--shadow);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.profile-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.profile-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--accent-color);
}

.header-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.digital-clock {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.widget {
    background: var(--widget-bg);
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: var(--shadow);
    transition: transform 0.2s ease;
}

.widget:hover {
    transform: translateY(-5px);
}

.widget h3 {
    margin-top: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--accent-color);
}

.theme-btn, .action-btn {
    cursor: pointer;
    border: none;
    border-radius: 8px;
    transition: opacity 0.2s;
    background: var(--accent-color);
    color: white;
    padding: 10px 15px;
}

.action-btn {
    width: 100%;
    font-weight: bold;
}

.link-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.link-item {
    text-decoration: none;
    color: var(--text-color);
    background: rgba(0,0,0,0.05);
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}

.dark-mode .link-item { background: rgba(255,255,255,0.05); }

.timer-display {
    font-size: 3rem;
    text-align: center;
    margin: 1rem 0;
    font-weight: bold;
}

.activity-list {
    list-style: none;
    padding: 0;
}

.activity-list li {
    padding: 8px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 0.9rem;
}


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


