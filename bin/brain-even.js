#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingThePlayer from '../src/index.js';

/// Функция возврата случайного целого числа, в интервале от max до min
function getRandomInt(max, min) {
  const maxCeil = Math.ceil(max);
  const minFloor = Math.floor(min);
  return Math.ceil(Math.random() * (maxCeil - minFloor) + minFloor);
}

/// Game Loop
function gameLoop() {
  let winCount = 0;
  const playerName = greetingThePlayer();

  while (winCount !== 3) {
    const currentRandomInt = getRandomInt(1, 20);
    const correctAnswer = currentRandomInt % 2 ? 'no' : 'yes';

    console.log(`Question: ${currentRandomInt}`);
    const playerAnswer = readlineSync.question('Answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'`);
      console.log(`Let's try again, ${playerName}!`);
      winCount = 0;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
}

gameLoop();
