/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // I - array of integers, target number
    // O - an array of the indexes which add up to the target
    // C - can not use the same element twice, answer can be in any order
    // E - n/a
    
    // index / val to check against
    let currentIndex = 0
    // result array
    let result = []
    
    // recursion
    const recursion = (arr, currentValue) => {
    // loop over array
        arr.map((value, index) => {
            if ((value + currentValue) === target) {
                if (!(index === currentIndex)){
                    result.push(index, currentIndex)
                }
              }
        })
        if (!(result.length === 2)) {
            currentIndex++
            recursion(nums, nums[currentIndex])   
        }    
    }
    // call recursion on index
    recursion(nums, nums[currentIndex])
    result.length = 2;
    // return result
    return result;
};


