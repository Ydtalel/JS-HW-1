let numberToGuess = Math.floor(Math.random() * 1000);
console.log(numberToGuess)
let userAnswer = alert("Угадайте число от 0 до 999");


while (numberToGuess != userAnswer) {
  userAnswer = prompt("Введите число");
  while (isNaN(userAnswer)) {
    alert("Вы ввели не число!!!");
    userAnswer = prompt("Введите число");
  }
  if (userAnswer > numberToGuess) {
    alert("Загаданное число меньше");
  } else if (userAnswer < numberToGuess) {
    alert("Загаданное число больше");
  }
}

alert("Поздравляю, вы угадали!");