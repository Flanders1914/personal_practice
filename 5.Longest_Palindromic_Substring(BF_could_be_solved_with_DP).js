/**
 * @param {string} s
 * @return {string}
 */

function is_palindromic (a,b,s) {
    while (a < b) {
        if (s[a] != s[b]) return false;
        else {
            a++;
            b--;
        }
    }
    return true;
}

var longestPalindrome = function(s) {
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        let current_ans = s[i];

        for (let j = s.length -1 ; j >i; j--) {
            if (is_palindromic(i,j,s)) {
                current_ans = s.slice(i,j+1);
                break;
            }
        }

        ans = (ans.length >= current_ans.length) ? ans : current_ans;

        if ((s.length - i - ans.length) <= 0 ) break;
    }

    return ans;
};

console.log(longestPalindrome("cbbd"));