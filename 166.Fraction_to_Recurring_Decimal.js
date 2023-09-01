/*
166. Fraction to Recurring Decimal
分数转化为小数
比较复杂
需要一个map收集余数和该余数生成的小数位的坐标
当余数出现重复时意味着小数开始循环
*/

var fractionToDecimal = function(numerator, denominator) {
    let map = new Map();
    // 分子分母全部求绝对值，保存答案的符号，先将分数化成带分数
    let sign = false;
    if ((numerator >= 0 && denominator > 0) ||
    numerator <= 0 && denominator < 0) sign = true;
    let quotient = Math.trunc(numerator/denominator);
    quotient = Math.abs(quotient);
    let remainder = Math.abs(numerator % denominator);
    denominator = Math.abs(denominator);

    //预处理答案
    let ans;
    if (sign) ans = '' + quotient;
    else ans = '-' + quotient;
    if (!remainder) return ans;
    else ans += '.';

    let decimal_section = [];
    let is_circular = false;
    let circular_index;
    map.set(remainder, 0);
    let count = 0;


    while (true) {
        //每一次循环首先余数要*10
        remainder *= 10;
        while (remainder < denominator) {
            remainder *= 10;
            decimal_section.push(0);
            count++;
        }
        decimal_section.push(Math.trunc(remainder/denominator));
        count++;
        remainder = remainder % denominator;
        if (!remainder) break;
        if (map.has(remainder)) {
            is_circular = true;
            circular_index = map.get(remainder);
            break;
        }
        map.set(remainder, count);
    }

    //处理并输出答案
    if (!is_circular) return ans + decimal_section.join('');
    for (let i = 0; i <= decimal_section.length-1; i++) {
        if (i == circular_index) ans = ans + '(' + decimal_section[i];
        else ans = ans + decimal_section[i];
    }
    return ans + ')';
};

console.log(fractionToDecimal(4,333))