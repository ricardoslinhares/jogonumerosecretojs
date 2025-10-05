function generateRandomNumber() {
  let actualNumber = Math.floor(Math.random() * maxAttempts) + 1;
  if (numberGenerated.includes(actualNumber)) {
    if (numberGenerated.length == maxAttempts) {
      numberGenerated = [];
    }
    return generateRandomNumber();
  } else {
    numberGenerated.push(actualNumber);
    console.log(numberGenerated);
    return actualNumber;
  }
}

function showScreenText(tag, text) {
  let field = document.querySelector(tag);
  field.innerHTML = text;
  responsiveVoice.speak(text, 'US English Male');
}

function clearInput() {
  document.querySelector('input').value = '';
}

function showInitialMessage() {
  let message = `Choose a number between 1 and ${maxAttempts}`;
  showScreenText('h1', 'Secret number game');
  showScreenText('p', message);
}

function restartGame() {
  secretNumber = generateRandomNumber();
  clearInput();
  attempts = 1;
  showInitialMessage();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

function checkGuess() {
  let guess = document.querySelector('input').value;
  if (guess == secretNumber) {
    let attemptsText = attempts === 1 ? 'attempt' : 'attempts';
    let attemptsMessage = `You've guessed the number in ${attempts} ${attemptsText}!`;
    showScreenText('h1', 'You got it! 🎉');
    showScreenText('p', attemptsMessage);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (guess < secretNumber) {
      showScreenText('p', 'Try a higher number! ⬆️');
    } else {
      showScreenText('p', 'Try a lower number! ⬇️');
    }
    attempts++;
    clearInput();
  }
}

let maxAttempts = 10;
showInitialMessage();
let numberGenerated = [];
let secretNumber = generateRandomNumber();
let attempts = 1;
