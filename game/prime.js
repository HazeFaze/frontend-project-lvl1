import readlineSync from 'readline-sync';
import { greetingThePlayer, wrongPlayerAnswer, getRandomInt } from '../src/index.js';

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function gameLoop() {
  const playerName = greetingThePlayer();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let winCount = 0;

  while (winCount !== 3) {
    const currentQuestion = getRandomInt(20, 1);
    const correctAnswer = isPrime(currentQuestion);
    console.log(`Question: ${currentQuestion}`);
    const playerAnswer = readlineSync.question('Answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      winCount += 1;
    } else {
      wrongPlayerAnswer(playerName, playerAnswer, correctAnswer);
      winCount = 0;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
}

export default gameLoop;
