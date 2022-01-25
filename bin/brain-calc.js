#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt, greetingThePlayer, wrongPlayerAnswer } from '../src/index.js';

const operationsList = ['+', '-', '*'];

function gameQuestion() {
  const currentQuestion = {
    leftOperand: getRandomInt(10, 1),
    rightOperand: getRandomInt(10, 1),
    operator: operationsList[getRandomInt(2, 0)],
    correctAnswer: 0
  };

  switch (currentQuestion.operator) {
    case '+':
      currentQuestion.correctAnswer = currentQuestion.leftOperand + currentQuestion.rightOperand;
      break;
    case '-':
      currentQuestion.correctAnswer = currentQuestion.leftOperand - currentQuestion.rightOperand;
      break;
    case '*':
      currentQuestion.correctAnswer = currentQuestion.leftOperand * currentQuestion.rightOperand;
      break;
    default:
      console.log('Something went wrong!');
      break;
  }
  return currentQuestion;
}

function gameLoop() {
  let winCount = 0;
  const playerName = greetingThePlayer();
  console.log('What is the result of the expression?');

  while (winCount !== 3) {
    const currentQuestion = gameQuestion();
    console.log(`Question: ${currentQuestion.leftOperand} ${currentQuestion.operator} ${currentQuestion.rightOperand}`);
    const playerAnswer = readlineSync.question('Answer: ');

    if (Number(playerAnswer) === currentQuestion.correctAnswer) {
      console.log('Correct!');
      winCount += 1;
    } else {
      wrongPlayerAnswer(playerName, playerAnswer, currentQuestion.correctAnswer);
      winCount = 0;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
}

gameLoop();
