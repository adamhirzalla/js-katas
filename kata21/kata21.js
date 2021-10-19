let prompt = require("prompt-sync")();

// code below (replace this example)
const guessed = [];
const rng = Math.floor((Math.random() * 100) + 1)
while (true) {
  let answer = prompt("Guess a number 1-100: ");
  if (answer === 'quit') break;
  if (guessed.includes(answer)) {
    console.log('Already Guessed!');
    continue;
  }
  if (Number(answer)) {
    if (answer > rng) {
      guessed.push(answer);
      console.log('Too High!');
    } else if (answer < rng) {
      guessed.push(answer);
      console.log('Too Low!');
    } else if (answer >= rng - 1 && answer <= rng + 1) {
      console.log('You got it! You took ' + (guessed.length + 1) + ' attempts!');
      console.log('Secret Number: ' + rng + '. Guessed numbers: ' + guessed.join(', ') + ', ' + answer);
      break;
    }
  } else console.log('Not a number! Try again!');
}
