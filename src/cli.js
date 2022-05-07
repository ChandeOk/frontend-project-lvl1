import readlineSync from "readline-sync";
export const hello = () => {
  console.log("Welcome to the Brain Games!");
  console.log("May I have your name? ");
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
};
