/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let result = true;
  let formatted = s
    .toLowerCase()
    .replace(/[\W_]+/g, '')
    .split('');
  let copy = formatted.map((letter) => {
    return letter;
  });

  let reversed = copy.reverse();

  for (let i = 0; i < formatted.length; i++) {
    if (formatted[i] !== reversed[i]) {
      result = false;
    }
  }
  return result;
};