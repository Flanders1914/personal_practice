/**
316. Remove Duplicate Letters
思路：单调增加栈
为了使生成的ans最小，理想的情况是所有的字母按照增序排列
但有些字母只有一个，必须放在特定的位置
对于字母c(stack中没有c)， 如果 c > last(stack最后一个字母) c入栈
如果 c < last: 若 last是相同字母的最后一个，那么last保留
               若 last不是最后一个，last出栈，更新last，并判断是否出栈，循环直到last不能出栈为止
               循环后c入栈
 */
var removeDuplicateLetters = function(s) {
    let set = new Set();
    let hash = new Map();
    let stack = [];
    for (let i = 0; i <= s.length-1; i++) {
        hash.set(s[i], i);
    }

    for (let i = 0; i <= s.length-1; i++) {
        if (set.has(s[i])) continue;
        if (stack.length == 0 || stack.at(-1) < s[i]) {
            stack.push(s[i]);
            set.add(s[i]);
            continue;
        }
        while (stack.length != 0) {
            let last = stack.pop();
            if ((hash.get(last)) > i && (s[i] < last)) set.delete(last);
            else {
                stack.push(last);
                break;
            }
        }
        stack.push(s[i]);
        set.add(s[i]);
    }
    return stack.join('');
};
console.log(removeDuplicateLetters("bcabc"));