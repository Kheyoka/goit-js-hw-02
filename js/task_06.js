'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  if (!Number.isNaN(Number(input))) {
    numbers.push(input);
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
}

if (numbers.length === 0) {
  alert('Вы не ввели ни одного числа');
} else {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
