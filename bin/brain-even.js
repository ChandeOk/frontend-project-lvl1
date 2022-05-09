#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNum = () => Math.floor(Math.random() * 100 + 1);
let score = 0;
const scoreToWin = 3;
while (score < scoreToWin) {
  const num = randomNum();
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const isEven = num % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  if (answer === correctAnswer) {
    score += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    break;
  }
}
if (score === scoreToWin) console.log(`Congratulations, ${name}!`);
