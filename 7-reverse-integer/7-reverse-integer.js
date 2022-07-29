/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0 ? true : false; // checks if the input number is negative
  isNegative ? (x = x * -1) : null; // if the input number is negative, make it positive

  let result = 0; // holds our result
  let lastDigit = 0; // holds the last digit pulled from the modulo operator

  while (x >= 1) { // while the input number is less than or equal to 1
    lastDigit = x % 10; // last digit is the remainder after dividing by 10 (modulo 10)
    result = result * 10 + lastDigit; // our result is the result * 10 + the last digit 
    x = Math.floor(x / 10); // and the number with Math.floor() is divided by 10 removing the last digit from the integer
  }
  if (result > 2147483647 || result < -2147483647) {
      return 0
  }
  return isNegative === true ? result * -1 : result; // if the result is negative make it positive then return the result
};

