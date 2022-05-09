#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  randomNum, askQuestion, checkAnswer, readAnswer, checkIsPrime,
} from '../../src/index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let score = 0;
const scoreToWin = 3;
let isAnswerCorrect;
do {
  const num = randomNum();
  const question = `Question: ${num}`;
  askQuestion(question);
  const answer = readAnswer();
  const isPrime = checkIsPrime(num);
  const correctAnswer = isPrime ? 'yes' : 'no';
  isAnswerCorrect = checkAnswer(answer, correctAnswer);
  if (isAnswerCorrect) score += 1;
} while (isAnswerCorrect && score < scoreToWin);
if (score === scoreToWin) console.log(`Congratulations, ${name}!`);
