'use strict';

const checkForSpam = function(str) {
  return str.toLowerCase().includes('spam') ||
    str.toLowerCase().includes('sale')
    ? true
    : false;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
