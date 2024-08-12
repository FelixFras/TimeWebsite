function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerText = time;
}

setInterval(updateClock, 100); // Update every 100 ms for accuracy