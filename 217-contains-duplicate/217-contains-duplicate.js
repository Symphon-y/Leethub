/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let result = false;
    let objCache = {}
    nums.forEach((item) => {
        if (!objCache[item]){
            objCache[item] = 1
        } else {
            objCache[item] ++
        }
        if(objCache[item] > 1){
            result = true
        }
    })
    return result;
};