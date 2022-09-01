/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let objCache = {};
  let result = [];
  nums.forEach((num) => {
    objCache[num] ? objCache[num]++ : (objCache[num] = 1);
  });

  const addToResult = (obj) => {
    let mostFrequentNum = 0;
    let mostFrequentKey;
    for (key in obj) {
      if (obj[key] > mostFrequentNum) {
        mostFrequentKey = key;
        mostFrequentNum = obj[key];
      }
    }
    result.push(mostFrequentKey);
    delete objCache[mostFrequentKey];
  };

  while (result.length < k) {
    addToResult(objCache);
  }

  return result.length > 0 ? result : nums;
};