let timezone = parseInt(0);

function updateClock() {
    const now = new Date();
    let hours = now.getHours() + timezone;

    if (hours < 0) {
        hours = 24 + hours;
    } else if (hours > 23) {
        hours = hours - 24;
    }

    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerText = time;
}

function makeSmaller() {
    const clockElement = document.getElementById('clock');
    const currentSize = parseFloat(window.getComputedStyle(clockElement).fontSize);
    clockElement.style.fontSize = (currentSize - 25) + 'px';

    if (currentSize <= 20) {
        clockElement.style.fontSize = 10 + 'px';
    }
}

function makeBigger() {
    const clockElement = document.getElementById('clock');
    const currentSize = parseFloat(window.getComputedStyle(clockElement).fontSize);
    clockElement.style.fontSize = (currentSize + 25) + 'px';

    if (currentSize >= 500) {
        clockElement.style.fontSize = 600 + 'px';
    }

}

function changeTimezone() {
    timezone = parseInt(document.getElementById('timezone').value);
    console.log(timezone);
}

function changeBgColor() {
    const color = document.getElementById('bgColor').value;
    document.body.style.backgroundColor = color;
}

function toggleVisibility() {
    const toolsElement = document.getElementById('tools');
    const buttonElement = document.getElementById('toggleButton');

    if (toolsElement.style.visibility === 'visible') {
        toolsElement.style.visibility = 'hidden';
        buttonElement.textContent = 'Click to show tools';
    } else {
        toolsElement.style.visibility = 'visible';
        buttonElement.textContent = 'Click to hide tools';
    }
}

setInterval(updateClock, 100); // Update every 100 ms for accuracy