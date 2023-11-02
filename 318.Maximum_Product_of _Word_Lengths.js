/**
318. Maximum Product of Word Lengths
思路：位运算
每一个word对应一个二进制数，若存在字母c，字母c的顺序为i，
那么该数的第i位为1
因此比较两个数是否存在相同的字母，只要判断 sets[i] & sets[j] 是否是0
是0表明两个字母是不存在相同的字母
*/
var maxProduct = function(words) {
    let sets = new Array(words.length).fill(0);
    for (let i = 0; i <= words.length -1; i++) {
        let set = 0;
        for (let j = 0; j <= words[i].length -1; j++) {
            set |= 1 << (words[i].charCodeAt(j) - 97);
        }
        sets[i] = set;
    } 
    let ans = 0;
    for (let i = 0; i <= words.length -2; i++) {
        for (let j = i +1; j <= words.length -1; j++) {
            if (!(sets[i] & sets[j])) ans = Math.max(words[i].length * words[j].length, ans);
        }
    }
    return ans;
};
console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"]));