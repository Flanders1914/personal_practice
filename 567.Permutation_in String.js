/**
567. Permutation in String
hash表+双指针表示区间的状态
count用于计算是否存在多余或者缺少的字母
 */
var checkInclusion = function(s1, s2) {
    let hash = new Map();
    let count = 0;
    for (let c of s1) {
        if (hash.has(c)) hash.set(c, hash.get(c)+1);
        else hash.set(c, 1);
        count++;
    }
    
    for (let i = 0; i <= s1.length-1; i++) {
        if (hash.has(s2[i])) {
            let num = hash.get(s2[i]);
            if (num > 0) count--;
            else count++;
            hash.set(s2[i], num-1);
        }
    }
    if (count == 0) return true;

    for (let i = s1.length; i <= s2.length-1; i++) {
        if (hash.has(s2[i])) {
            let num = hash.get(s2[i]);
            if (num > 0) count--;
            else count++;
            hash.set(s2[i], num-1);
        }
        if (hash.has(s2[i-s1.length])) {
            let num = hash.get(s2[i-s1.length]);
            if (num >=0) count++;
            else count--;
            hash.set(s2[i-s1.length], num+1); 
        }
        if (count == 0) return true;
    }
    
    return false;
};
let s1 = "ab", s2 = "eidbooaooo";
console.log(checkInclusion(s1, s2));