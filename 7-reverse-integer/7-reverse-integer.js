/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let number = Math.abs(x);
  let result = 0;
  
  while (number > 0) {
    const lastDigit = number % 10;
    result = result * 10 + lastDigit;
    number = Math.floor(number / 10);
  }
    
  if (result > 2147483647 || result < -2147483647) {
      return 0
  }
  const sign = x < 0 ? -1 : 1;
  return result * sign;
};


