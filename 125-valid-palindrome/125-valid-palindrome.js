/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let formatted = s
    .toLowerCase()
    .replace(/[\W_]+/g, '')
    .split('');
  let left = 0;
  let right = formatted.length - 1;
  while (right > left) {
    if (formatted[left] !== formatted[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
