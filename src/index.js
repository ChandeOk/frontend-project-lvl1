import readlineSync from 'readline-sync';

export const randomNum = () => Math.floor(Math.random() * 100 + 1);
export const askQuestion = (question) => {
  console.log(question);
};
export const readAnswer = () => readlineSync.question('Your answer: ');
export const checkAnswer = (userAnswer, correctAnswer, name) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
  return false;
};
export const getRandomOperator = () => {
  const randomOperator = Math.floor(Math.random() * 3 + 1);
  switch (randomOperator) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return null;
  }
};
export const getGCD = (num1, num2) => {
  let gcd;
  for (let i = 1; i <= num1 && i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};
export const generateRandomProgression = (length) => {
  const arr = [];
  const random = randomNum();
  let randomStart = randomNum();
  for (let i = 0; i < length; i += 1) {
    randomStart += random;
    arr.push(randomStart);
  }
  const randomIndex = Math.floor(Math.random() * length);
  const answer = arr[randomIndex];
  arr[randomIndex] = '..';
  return [arr.join(' '), answer];
};
export const checkIsPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
