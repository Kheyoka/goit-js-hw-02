'use strict';

function findLongestWord(string) {
  let arr = string.split(' ');
  let maxNum = arr[0];
  for (let element of arr) {
    if (element.length > maxNum.length) {
      maxNum = element;
    }
  }
  return maxNum;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
