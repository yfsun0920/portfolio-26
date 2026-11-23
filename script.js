const clock = document.querySelector('#clock');
const year = document.querySelector('#year');

function updateLocalTime() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZoneName: 'short'
  });
  const parts = formatter.formatToParts(now);
  const hour = parts.find((part) => part.type === 'hour')?.value ?? '';
  const minute = parts.find((part) => part.type === 'minute')?.value ?? '';
  const zone = parts.find((part) => part.type === 'timeZoneName')?.value ?? '';
  clock.textContent = `${hour}:${minute} ${zone}`;
  clock.dateTime = now.toISOString();
}

updateLocalTime();
year.textContent = new Date().getFullYear();
window.setInterval(updateLocalTime, 60_000);
