/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let result = [];
  let objCache = new Map();

  numbers.forEach((num, index) => {
    objCache.set(num, index);
  });

  for (let i = 0; i < numbers.length; i++) {
    if (objCache.has(target - numbers[i])) {
      result.push(i + 1, objCache.get(target - numbers[i]) + 1);
      return result;
    }
  }
};