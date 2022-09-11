/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let x = s
    .toLowerCase()
    .replace(/[\W_]+/g, '')
  let [left, right] = [0, x.length-1];
  while (right > left) {
    if (x[left] !== x[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
