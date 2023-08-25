/*
131. Palindrome Partitioning
其实和之前做的生成排列/组合题一样是用递归search做，不要被回文字所迷惑
思路：
对于一个字符串s，我们先拿前n个字符生成一个回文字，再递归调用函数生成去除前n个字符的字字符串的回文字组合
合在一起向向层调用返回
*/
var partition = function(s) {

    function isPalindrome(s) {
        let l = 0;
        let r = s.length-1;
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }

    let ans = [];
    const search = function(s, index, previous) {
        if (index >= s.length) {
            ans.push(previous.slice());
            return;
        }
        let current = '';
        for (let i = index; i <= s.length -1; i++) {
            current += s[i];
            if (isPalindrome(current)) {
                previous.push(current);
                search(s, i+1, previous);
                previous.pop();
            }
        }
    };
    search(s, 0, []);
    return ans;
};

let s = "a";
for (let row of partition(s)) console.log(row);