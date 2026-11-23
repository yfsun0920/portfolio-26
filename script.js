const clock = document.querySelector('#clock');

function updateLocalTime() {
  const now = new Date();
  const value = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short'
  }).format(now);
  clock.textContent = value;
  clock.dateTime = now.toISOString();
}

updateLocalTime();
window.setInterval(updateLocalTime, 1000);
