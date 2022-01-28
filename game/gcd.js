import readlineSync from 'readline-sync';
import { getRandomInt, greetingThePlayer, wrongPlayerAnswer } from '../src/index.js';

function nod(left, right) {
  let x = left;
  let y = right;

  while (y !== 0) {
    y = x % (x = y);
  }
  return x;
}

function gameLoop() {
  const playerName = greetingThePlayer();
  console.log('Find the greatest common divisor of given numbers.');
  let winCount = 0;

  while (winCount !== 3) {
    const currentQuestion = {
      leftNum: getRandomInt(20, 1),
      rightNum: getRandomInt(20, 1),
      correctAnswer: 0,
    };
    currentQuestion.correctAnswer = nod(currentQuestion.leftNum, currentQuestion.rightNum);

    console.log(`Question: ${currentQuestion.leftNum} ${currentQuestion.rightNum}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (Number(playerAnswer) === currentQuestion.correctAnswer) {
      console.log('Correct!');
      winCount += 1;
    } else {
      wrongPlayerAnswer(playerName, playerAnswer, currentQuestion.correctAnswer);
      break;
    }
  }
  if (winCount === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
}

export default gameLoop;
