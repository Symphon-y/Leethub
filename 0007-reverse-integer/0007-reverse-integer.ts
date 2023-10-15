 const isNumberOutOfRange = (num: number): boolean => {
  return num > 2147483647 || num < -2147483648;
};

 const reverse = (x: number): number => {
  let number: number = Math.abs(x); // holds a new copy of the absolute value of the input integer
  let result: number = 0;
  while (number > 0) {
    const lastDigit = number % 10;
    result = result * 10 + lastDigit;
    number = Math.floor(number / 10);
  }
  const sign = x < 0 ? -1 : 1; // creates a variable either 1 or -1 depending on input numbers quality
  return isNumberOutOfRange(result * sign) ? 0 : result * sign;
};
