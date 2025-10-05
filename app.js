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

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'US English Male');
}

function clearInput() {
  document.querySelector('input').value = '';
}

function showInitialMessage() {
  let message = `Choose a number between 1 and ${maxAttempts}`;
  exibirTextoNaTela('h1', 'Secret number game');
  exibirTextoNaTela('p', message);
}

function restartGame() {
  secretNumber = generateRandomNumber();
  clearInput();
  attempts = 1;
  showInitialMessage();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute() {
  let guess = document.querySelector('input').value;
  if (guess == secretNumber) {
    let attemptsText = attempts === 1 ? 'attempt' : 'attempts';
    let attemptsMessage = `You've guessed the number in ${attempts} ${attemptsText}!`;
    exibirTextoNaTela('h1', 'You got it! 🎉');
    exibirTextoNaTela('p', attemptsMessage);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (guess < secretNumber) {
      exibirTextoNaTela('p', 'Try a higher number! ⬆️');
    } else {
      exibirTextoNaTela('p', 'Try a lower number! ⬇️');
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
