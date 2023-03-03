const humanReadableTime = require('./lib/human-readable-time');

const KEYBOARD_CHARS = 'abcdefghijklmnopqrstuvwxyz ';
const TARGET_PHRASE = 'thomas';
const WORDS_PER_MINUTE = 60;
const MAX_ATTEMPTS = 100_000;

function tryTyping(phrase) {
  let result = '';

  while (result.length < phrase.length) {
    const randomIndex = Math.floor(Math.random() * KEYBOARD_CHARS.length);
    result += KEYBOARD_CHARS.charAt(randomIndex);
  }

  return result;
}

function start() {
  let result = '';
  let numAttempts = 0;

  while (result !== TARGET_PHRASE && numAttempts < MAX_ATTEMPTS) {
    numAttempts++;
    result = tryTyping(TARGET_PHRASE);
    console.log(result);
  }

  const elapsedTime = humanReadableTime(
    Math.round(numAttempts / WORDS_PER_MINUTE) * 60 * 1000
  );

  if (numAttempts < MAX_ATTEMPTS) {
    console.log(
      `The chimp successfully typed "${TARGET_PHRASE}" in ${numAttempts} attempts. (Elapsed time: ${elapsedTime})`
    );
  } else {
    console.log(
      `The chimp failed to type "${TARGET_PHRASE}" because the maximum attempts of ${MAX_ATTEMPTS} was reached. (Elapsed time: ${elapsedTime})`
    );
  }
}

start();
