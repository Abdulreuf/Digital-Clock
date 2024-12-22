
let is24HourFormat = false;

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let period = '';
    
    if (!is24HourFormat) {
        period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    }
    
    clock.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;
}

document.getElementById('toggleBtn').addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    const toggleBtn = document.getElementById('toggleBtn');
    toggleBtn.textContent = is24HourFormat ? 'Switch to 12-Hour' : 'Switch to 24-Hour';
    updateClock();
});

setInterval(updateClock, 1000);
updateClock();
