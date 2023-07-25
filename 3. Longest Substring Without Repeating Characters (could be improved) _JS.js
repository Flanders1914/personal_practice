/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash_table = {};
    let ans = 0;
    let current_ans = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] in hash_table) {

            ans = (ans < current_ans)? current_ans : ans;
            current_ans = i - hash_table[s[i]];

            let sub_s = {}
            for (let j = hash_table[s[i]]+1; j <= i ; j++) {
                sub_s[s[j]] = j;
            }
            hash_table = sub_s;

        } else {
            hash_table[s[i]] = i;
            current_ans += 1;
        }
    }
return (ans > current_ans)? ans : current_ans;

};

console.log(lengthOfLongestSubstring(" "));
