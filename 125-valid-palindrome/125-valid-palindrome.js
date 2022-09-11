/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let x = s
    .toLowerCase()
    .replace(/[\W_]+/g, '')
  let [l, r] = [0, x.length-1];
  while (r > l) {
    if (x[l] !== x[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
