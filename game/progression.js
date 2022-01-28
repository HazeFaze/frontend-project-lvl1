import readlineSync from 'readline-sync';
import { getRandomInt, greetingThePlayer, wrongPlayerAnswer } from '../src/index.js';

function generateProgression() {
  const currentProgression = [];
  let progressionStartNumber = getRandomInt(20, 1);
  const progressionLength = getRandomInt(10, 5);
  const progressionStep = getRandomInt(15, 1);
  let iterationCount = 0;

  while (iterationCount !== progressionLength) {
    currentProgression.push(progressionStartNumber);
    progressionStartNumber += progressionStep;
    iterationCount += 1;
  }
  const currentQuestion = {
    progression: currentProgression,
    progressionLength
  };

  return currentQuestion;
}

function gameLoop() {
  const playerName = greetingThePlayer();
  console.log('What number is missing in the progression?');
  let winCount = 0;

  while (winCount !== 3) {
    const currentProgression = generateProgression();
    const hiddenProgressionNumberIndex = getRandomInt(currentProgression.progressionLength, 0);
    const correctAnswer = currentProgression.progression[hiddenProgressionNumberIndex];
    let currentQuestion = '';

    for (let i = 0; i < currentProgression.progression.length; i += 1) {
      if (i === hiddenProgressionNumberIndex) {
        currentQuestion += '.. ';
      } else {
        currentQuestion += `${currentProgression.progression[i]} `;
      }
    }

    console.log(`Question: ${currentQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (Number(playerAnswer) === correctAnswer) {
      console.log('Correct!');
      winCount += 1;
    } else {
      wrongPlayerAnswer(playerName, playerAnswer, correctAnswer);
      winCount = 0;
    }
  }
  console.log(`Congratulation, ${playerName}!`);
}

export default gameLoop;
