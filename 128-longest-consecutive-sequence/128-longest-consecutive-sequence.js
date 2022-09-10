/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // sort array
  if (nums.length === 0) {
    return 0;
  }
  let sorted = nums.sort(function (a, b) {
    if (a === Infinity) return 1;
    else if (isNaN(a)) return -1;
    else return a - b;
  });
  // count variables(s)
  let longestCount = 1;
  let currentCount = 1;
  // iterate over the array
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] === sorted[i] + 1) {
      currentCount++;
      if (currentCount > longestCount) {
        longestCount = currentCount;
      }
    } else if (sorted[i] === sorted[i + 1]) {
      currentCount = currentCount;
    } else {
      currentCount = 1;
    }
  }
  // check current index against next index
  // count longest consequtive sequence
  return longestCount;
};