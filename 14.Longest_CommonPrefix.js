/**
 * @param {string[]} strs
 * @return {string}
 */

function Common_Prefix (s1,s2) {
    let prefix = "";
    let i = 0;
    for (let c of s1) {
        if (c == s2[i]) {
            prefix = prefix + c;
        } else {
            return prefix;
        }
        i++;
    }
    return prefix;
}

var longestCommonPrefix = function(strs) {
    smallest_str = strs[0];
    for (let s of strs) {
        smallest_str = (smallest_str.length > s.length) ? s : smallest_str;
    }

    let ans = smallest_str;

    for (let s of strs) {
        ans = Common_Prefix(ans, s);
    }

    return ans;

};

