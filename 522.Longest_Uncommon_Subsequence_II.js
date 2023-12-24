/**
522. Longest Uncommon Subsequence II
思路：从521我们可以得知 LUS 的秘密
然后我们首先根据长度对strs排序
将相同长度的str单独放入一组中进行处理
若相同长度组的strs中出现一个str, 不存在相同的字符串
在比它大的字符串中也没有一个包括它，它就是我们所需的 LUS
*/
function isSub(strs, s) { // 判断之前的所有strs中没有一个包括了目标
    for (let str of strs) {
        let i = 0;
        let j = 0;
        while (i != str.length && j != s.length) {
            if (str[i++] == s[j]) j++; 
        }
        if (j == s.length) return false;
    }
    return true;
}

var findLUSlength = function(strs) {
    strs.sort((a, b) => a.length - b.length); // 排序
    let temp = []; // temp 数组存储之前的所有不重复的str
    while (strs.length) {
        let current = []; // 相同长度的字符串为一组进行处理
        current.push(strs.pop());
        while (strs.length && (strs.at(-1).length == current[0].length)) {
            current.push(strs.pop());
        }
        current.sort((a, b) => {
            if (a >= b) return 1;
            else return -1;
        });
        let pre = current[0];
        let is_unique = true;
        for (let i = 1; i <= current.length-1; i++) {
            if (current[i] == pre) is_unique = false;
            else {
                if (is_unique) {
                    if (isSub(temp, pre)) return pre.length;
                }
                temp.push(pre);
                is_unique = true;
                pre = current[i];
            }
        }
        if (is_unique && isSub(temp, pre)) return pre.length;
        temp.push(pre);
    }
    return -1;
};
console.log(findLUSlength(["aaa","aaa","bb"]));