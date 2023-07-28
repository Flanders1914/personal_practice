/*
9. Palindrome Number
判断回文数，没什么好说的
 */
var isPalindrome = function(x) {
    let str = String(x);
    let l = 0;
    let r = str.length -1;

    while (l <= r) {

        if (str[l] != str[r]) return false;
        l++;
        r--;

    }

    return true;
};

console.log(isPalindrome(1001));