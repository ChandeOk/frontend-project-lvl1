import readlineSync from 'readline-sync';

export const randomNum = () => Math.floor(Math.random() * 100 + 1);
export const askQuestion = (question) => {
  console.log(question);
};
export const readAnswer = () => readlineSync.question('Your answer: ');
export const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
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
