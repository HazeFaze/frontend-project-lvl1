import readlineSync from 'readline-sync';
import { getRandomInt, greetingThePlayer, wrongPlayerAnswer } from '../src/index.js';

/// Game Loop
function gameLoop() {
  let winCount = 0;
  const playerName = greetingThePlayer();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (winCount !== 3) {
    const currentRandomInt = getRandomInt(1, 20);
    const correctAnswer = currentRandomInt % 2 ? 'no' : 'yes';

    console.log(`Question: ${currentRandomInt}`);
    const playerAnswer = readlineSync.question('Your answer: ');

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
