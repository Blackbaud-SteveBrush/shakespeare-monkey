function padTo2Digits(milliseconds) {
  return milliseconds.toString().padStart(2, '0');
}

function humanReadableTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let years = Math.floor(days / 365);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;
  days = days % 365;

  return `${padTo2Digits(years)}y ${padTo2Digits(days)}d ${padTo2Digits(
    hours
  )}h ${padTo2Digits(minutes)}m ${padTo2Digits(seconds)}s`;
}

module.exports = humanReadableTime;
