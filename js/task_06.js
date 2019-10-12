'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');

  if (!Number.isNaN(Number(input))) {
    numbers.push(Number(input));
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
} while (input !== null && numbers.length > 0);

for (const number of numbers) {
  total += number;
  console.log(`Общая сумма чисел равна ${total}`);
}
