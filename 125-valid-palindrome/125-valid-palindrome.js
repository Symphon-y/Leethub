/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let formatted = s
    .toLowerCase()
    .replace(/[\W_]+/g, '')
  let [left, right] = [0, formatted.length-1];
  while (right > left) {
    if (formatted[left] !== formatted[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
