import readlineSync from 'readline-sync';

/// Функция приветствия игрока и запоминания его имени
export function greetingThePlayer() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

/// Функция возвращает случайное число от min до max
export function getRandomInt(max, min) {
  const maxCeil = Math.ceil(max);
  const minFloor = Math.floor(min);
  return Math.ceil(Math.random() * (maxCeil - minFloor) + minFloor);
}

/// Функция возвращает сообщения об ошибочном выборе игрока
export function wrongPlayerAnswer(playerName, playerAnswer, correctAnswer) {
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'`);
  console.log(`Let's try again, ${playerName}!`);
}
