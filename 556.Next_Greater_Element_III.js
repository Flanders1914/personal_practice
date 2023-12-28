/**
556. Next Greater Element III
思路：先将数字转化为数组
然后从尾部开始向前迭代
每个digit 判断之前有没有比它大的数位
有，选择最小的那个并与当前数位交换，当前数位左侧不变，右侧从小到达对数位排序
构成答案
注意判断答案是否超过整数范围
 */
var nextGreaterElement = function(n) {
    const digits = [];
    for (let c of ("" + n)) {
        digits.push(Number(c));
    }
    let pre  = [];
    for (let i = digits.length-1; i >= 0; i--) {
        if (pre.length) {
            for (let j = 0; j <= pre.length-1; j++) {
                if (digits[i] < pre[j]) {
                    [digits[i], pre[j]] = [pre[j], digits[i]];
                    pre.sort((a, b) => a - b);
                    let res = digits.slice(0, i+1).join('') + pre.join('');
                    if (res.length == 10 && (res > "2147483647")) return -1;
                    else return Number(res);
                }
            }
        }
        pre.push(digits[i]);
        pre.sort((a, b) => a - b);
    }
    return -1;
};
console.log(nextGreaterElement(212));