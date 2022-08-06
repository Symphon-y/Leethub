/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(rotated, target) {
  let cache = {};
    
  rotated.forEach((item, index) => {
    cache[item] = index;
  });

  return cache[target] || cache[target] === 0 ? cache[target] : -1;
};