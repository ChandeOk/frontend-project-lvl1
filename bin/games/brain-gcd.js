#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  randomNum, askQuestion, checkAnswer, readAnswer, getGCD,
} from '../../src/index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given nubmers.');
let score = 0;
const scoreToWin = 3;
let isAnswerCorrect;
do {
  const num1 = randomNum();
  const num2 = randomNum();
  const question = `Question: ${num1} ${num2}`;
  askQuestion(question);
  const answer = readAnswer();
  const correctAnswer = getGCD(num1, num2).toString();
  isAnswerCorrect = checkAnswer(answer, correctAnswer);
  if (isAnswerCorrect) score += 1;
} while (score < scoreToWin && isAnswerCorrect);
if (score === scoreToWin) console.log(`Congratulations, ${name}!`);
