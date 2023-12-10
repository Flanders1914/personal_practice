/**
336. Palindrome Pairs
思路：利用两个 trie tree(正序，反序)
当current达到一个trie中一个结束点时，判断剩余字符是否回文
正序反序分别对应当前字符串放在后面还是前面，这样才能涵盖所有的情况
时间复杂度 O(n^2) 
题目要求时间复杂度为O(n) 但目前没有找到真正是O(n)的算法
当前O(n^2)算法速度已经 > 85%
 */
function isPalindrome(s, l, r) {
    while (l <= r) {
        if (s[l++] == s[r--]) continue;
        else return false;
    }
    return true;
}

var palindromePairs = function(words) {
    let root1 = {flag : -1};
    let root2 = {flag : -1};
    let res = [];

    for (let i = 0; i <= words.length-1; i++) {
        if (words[i].length == 0) { //先处理空字符串
            root1.flag = i;
            root2.flag = i;
            continue;
        }

        let current = root1; // 正序
        for (let c of words[i]) {
            if (current[c]) current = current[c];
            else {
                current[c] = {flag : -1};
                current = current[c];
            }
        }
        current.flag = i;
        current = root2; // 反序
        for (let j = words[i].length-1; j >= 0; j--) {
            let c = words[i][j];
            if (current[c]) current = current[c];
            else {
                current[c] = {flag : -1};
                current = current[c];
            }
        }
        current.flag = i;
    }

    for (let i = 0; i <= words.length-1; i++) {
        if (words[i].length == 0) continue; // 跳过空字符串
        if (root1.flag != -1) {
            if (isPalindrome(words[i], 0, words[i].length-1)) { // 先处理空字符串的情况
                res.push([root1.flag, i]);
                res.push([i, root1.flag]);
            }
        }
        let current = root2; // 当前的字符串在前，对应反序前缀树
        for (let j = 0; j <= words[i].length-1; j++) {
            if (current[words[i][j]]) {
                current = current[words[i][j]];
                if (current.flag != i && current.flag != -1) {
                    if (isPalindrome(words[i], j+1, words[i].length-1)) {
                        res.push([i, current.flag]);
                    }
                }
            } else break;
        } 
        current = root1; // 当前的字符串在后，对应正序前缀树，注意结束条件为1，提前结束循环，避免重复情况
        for (let j = words[i].length-1; j >= 1; j--) {
            if (current[words[i][j]]) {
                current = current[words[i][j]];
                if (current.flag != i && current.flag != -1) {
                    if (isPalindrome(words[i], 0, j-1)) {
                        res.push([current.flag, i]);
                    }
                }
            } else break;
        }
    }
    return res;
};

let words = ["abcd","dcba","lls","s","sssll"];
for (let item of palindromePairs(words)) console.log(item);