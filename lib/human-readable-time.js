function padTo2Digits(milliseconds) {
  return milliseconds.toString().padStart(2, '0');
}

function humanReadableTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);

  const hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  return `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m ${padTo2Digits(
    seconds
  )}s`;
}

module.exports = humanReadableTime;
