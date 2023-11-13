/**
402. Remove K Digits
思路：注意从左往右，若下一个digit小于当前的digit
当前的digit应该被删除，因为生成的新数必然小于之前的数且更改的是较高的位对最后的结果影响
比较大
所以维护一个单调递增的栈，若新元素比栈顶小，栈顶出栈即删除掉一个元素
迭代到用尽删除的次数或者坐标超过s的坐标位置
注意将剩余的digit放在res的后面作为较低位
注意前面不能有0
 */
var removeKdigits = function(num, k) {
    if (k >= num.length) return '0';
    let output = function(s) {
        if (s.length == 0) return '0';
        let index = 0;
        while ( index <= s.length-1 && s[index] == '0') {
            index++;
        }
        if (index == 0) return s.join('');
        else if (index == s.length) return '0';
        else return s.slice(index, s.length).join('');
    };

    let s = num.split('');
    let count = 0;
    let index = 1;
    let res = [s[0]];
    let pre = s[0];
    while ( count < k && index <= s.length-1) {
        if (pre > s[index]) {
            res.pop();
            if (res.length == 0) {
                res.push(s[index]);
                pre = s[index];
                index++;
            } else {
                pre = res.at(-1);
            }
            count++;
        } else {
            res.push(s[index]);
            pre = s[index];
            index++;
        }
    }
    if (index <= s.length-1) {
        for (let i = index; i <= s.length-1; i++) res.push(s[i]);
    }
    if (count == k) return output(res);
    else return output(res.slice(0, res.length-(k-count)));
};
let num = "212", k = 1;
console.log(removeKdigits(num, k));