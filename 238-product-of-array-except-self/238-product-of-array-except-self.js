/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
      let result = [];
  let currentIndex = 0;

  while (result.length < nums.length) {
    let currentRes = 1;
    let divisor = nums[currentIndex] === 0 ? 1 : nums[currentIndex];
    for (var i = 0; i < nums.length; i++) {
      if (nums[currentIndex] === 0 && currentIndex === i) {
        currentRes = currentRes;
      } else {
        currentRes *= nums[i];
      }
    }
    currentRes /= divisor;
    result.push(currentRes);
    currentIndex++;
  }
  return result;
};