/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sArray = s.split('')
    let tArray = t.split('')
    let sCache = {}
    let tCache = {}
    let result = true;
    if (sArray.length !== tArray.length) {
        result = false;
        return result;
    }
    sArray.forEach((item) => {
      if (!sCache[item]) {
          sCache[item] = 1
      } else {
          sCache[item]++
      }
    })
    tArray.forEach((item) => {
      if (!tCache[item]){
          tCache[item] = 1
      } else {
          tCache[item]++
      }
    })
    // check obj cache of s against t
   for(item in sCache){
       if (sCache[item] !== tCache[item]){
           result = false;
       }
   }
    return result;
};

//isAnagram("anagram", "nagaram")