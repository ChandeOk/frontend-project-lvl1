#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  randomNum, askQuestion, checkAnswer, readAnswer, getRandomOperator,
} from '../../src/index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
let score = 0;
const scoreToWin = 3;
let isAnswerCorrect;
do {
  const num1 = randomNum();
  const num2 = randomNum();
  const randomOperator = getRandomOperator();
  const question = `Question: ${num1} ${randomOperator} ${num2}`;
  askQuestion(question);
  const answer = readAnswer();
  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = (num1 + num2).toString();
      break;
    case '-':
      correctAnswer = (num1 - num2).toString();
      break;
    case '*':
      correctAnswer = (num1 * num2).toString();
      break;
    default:
      break;
  }
  isAnswerCorrect = checkAnswer(answer, correctAnswer, name);
  if (isAnswerCorrect) score += 1;
} while (score < scoreToWin && isAnswerCorrect);
if (score === scoreToWin) console.log(`Congratulations, ${name}!`);
