/*
7. Reverse Integer
思路：
1. 先判断符号，对正数和负数分别处理
2. 先将数字转化为字符串，再生成反转字符串，再转化为数字
3. 利用JS字符串转数字去除头部0的特性
4. 利用JS字符串比较的规则判断反转后的数字所处的范围
注意：
1. 题目有个坑，要求反转的字符串在 32-bit int范围内，可以用JS
的字符串比较原则简单解决。
2. 由于给的数字也是32-bit int 所以只需要考虑当给的数字是10位数的情况下可能
会超过范围。
 */
var reverse = function(x) {
    let str = String(x);
    if (str[0] == "-") {

        let ans_str = '';
        for (let i = str.length -1; i > 0; i--) ans_str += str[i];

        if (ans_str.length == 10 && ans_str > "2147483648") return 0;
        else return 0 - Number(ans_str);

    } else {

        let ans_str = '';
        for (let i = str.length -1; i >= 0; i--) ans_str += str[i];

        if (ans_str.length == 10 && ans_str > "2147483647") return 0;
        else return Number(ans_str);
    }
};

console.log(reverse(-1000));