function showTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    });
    const clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.textContent = time;
    }
}
setInterval(showTime, 1000);
showTime(); 