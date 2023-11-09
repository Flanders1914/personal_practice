/**
387. First Unique Character in a String
思路：利用hash表存储字符c 在 s 中最后出现的坐标
从左到右遍历s， 如果字符c在hash中对应的坐标i是其坐标且c在之前没有出现过
说明其是唯一的字符
 */
var firstUniqChar = function(s) {
    let hash = new Map();
    for (let i = 0; i <= s.length-1; i++) {
        hash.set(s[i],i);
    }
    let set = new Set();
    for (let i = 0; i <= s.length-1; i++) {
        if (hash.get(s[i]) == i) {
            if (!set.has(s[i])) return i;
        } else {
            set.add(s[i]);
        }
    }
    return -1;
};