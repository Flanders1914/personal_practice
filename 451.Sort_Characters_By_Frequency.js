/**
451. Sort Characters By Frequency
思路 hash表
 */
var frequencySort = function(s) {
    let hash = new Map();
    for(let c of s) {
        if (hash.has(c)) hash.set(c, hash.get(c)+1);
        else hash.set(c, 1);
    }
    let arr = Array.from(hash);
    arr.sort((a, b) => b[1] - a[1]);
    let res = '';
    for (let item of arr) {
        res += item[0].repeat(item[1]);
    }
    return res;
};
console.log(frequencySort("tree"));