'use strict';

const checkForSpam = function(str) {
  const s = str.toLowerCase();
  return s.includes('spam') || s.includes('sale');
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
