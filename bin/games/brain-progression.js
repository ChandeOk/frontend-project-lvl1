#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  askQuestion, checkAnswer, readAnswer, generateRandomProgression,
} from '../../src/index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
let score = 0;
const scoreToWin = 3;
let isAnswerCorrect;
do {
  const randomLength = Math.floor(Math.random() * 6 + 5);
  const [progression, correctAnswer] = generateRandomProgression(randomLength);
  const question = `Question: ${progression}`;
  askQuestion(question);
  const answer = readAnswer();
  isAnswerCorrect = checkAnswer(answer, correctAnswer.toString(), name);
  if (isAnswerCorrect) score += 1;
} while (isAnswerCorrect && score < scoreToWin);
if (score === scoreToWin) console.log(`Congratulations, ${name}!`);
