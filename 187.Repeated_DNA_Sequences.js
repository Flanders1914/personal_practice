/**
187. Repeated DNA Sequences
思路：利用hash表存储已经出现的sequences
 */
var findRepeatedDnaSequences = function(s) {
    if (s.length <= 10) return [];
    let ans = [];
    let hash = new Map();
    for (let i = 0; i <= s.length-10; i++) {
        let current = s.slice(i, i+10);
        if (!hash.has(current)) {
            hash.set(current, 1);
        }
        else {
            if (hash.get(current) == 1) {
                ans.push(current);
                hash.set(current, 2);
            }
        }
    }
    return ans;
};