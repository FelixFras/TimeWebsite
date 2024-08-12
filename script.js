let timezone = parseInt(0);

function updateClock() {
    const now = new Date();
    const hours = now.getHours() + timezone;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerText = time;
}

function makeSmaller() {
    const clockElement = document.getElementById('clock');
    const currentSize = parseFloat(window.getComputedStyle(clockElement).fontSize);
    clockElement.style.fontSize = (currentSize - 10) + 'px';
}

function makeBigger() {
    const clockElement = document.getElementById('clock');
    const currentSize = parseFloat(window.getComputedStyle(clockElement).fontSize);
    clockElement.style.fontSize = (currentSize + 10) + 'px';
}

function changeTimezone() {
    timezone = parseInt(document.getElementById('timezone').value);
    console.log(timezone);
}

setInterval(updateClock, 100); // Update every 100 ms for accuracy