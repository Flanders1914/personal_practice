/*
38. Count and Say
思路：大水题，简单递归即可，难度在于理解题目
注意：不要忘记在循环结束后加上最后一项
 */
var countAndSay = function(n) {
    if (n == 1) return '1';
    let last_term = countAndSay(n-1);
    let last_char = last_term[0];
    let count = 1, this_term = '';

    for (let i = 1; i <= last_term.length -1; i++) {
        if (last_char == last_term[i]) count++;
        else {
            this_term += count + last_char;
            count = 1;
            last_char = last_term[i];
        }
    }

    this_term += count + last_char;
    return this_term;
};

console.log(countAndSay(4));