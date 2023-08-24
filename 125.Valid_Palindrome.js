/*
125. Valid Palindrome
判断处理后的字符串是否是回文字符
*/
var isPalindrome = function(s) {
    let pharse = '';
    for (let c of s) {
        if ((c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
            pharse = pharse + c.toLowerCase();
        }
    }

    let l = 0, r = pharse.length -1;

    while (l < r) {
        if (pharse[l] !== pharse[r]) {
            return false;
        }
        l++;
        r--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))