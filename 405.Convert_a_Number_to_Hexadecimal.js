/**
思路：数组模拟数位运算
注意补码是用于让减法转化为加法，负数转化为反码和其他数进行无符号加法，由于溢出的
机制，得到了减法的差（因为 计算机中的加法本质上是和的取模)
补码 ： 正数补码为自身
负数补码为符号位不变，其他位取反后加一（注意符号位一直不变）
 */
var toHex = function(num) {
    let digits = new Array(32).fill(0);
    let is_nega = false;
    let temp = num;

    if (num < 0) {
        is_nega = true;
        temp = -temp;
    }
    for (let i = 31; i >= 0; i--) {
        digits[i] += temp % 2;
        temp = Math.floor(temp/2);
    }
    if (is_nega) {
        digits[0] = 1;
        for (let i = 1; i <= 31; i++) digits[i] = (digits[i] == 0)? 1 : 0;
        for (let i = 31; i >= 1; i--) {
            if (digits[i] == 1) digits[i] = 0;
            else {
                digits[i] = 1;
                break;
            }
        }
    }
    // convert
    let res = [];
    let dic = {10 : "a", 11 : "b", 12 : "c", 13 : "d", 14 : "e", 15 : "f"};
    let count = 0;
    let is_leading = true;
    for (let i = 0; i <= 31; i++) {
        if ((i+1) % 4) {
            count *= 2;
            count += digits[i];
        } else {
            count *= 2;
            count += digits[i];
            if (count == 0) {
                if (is_leading) continue;
                else {
                    res.push('0');
                    continue;
                }
            }
            if (count > 9) res.push(dic[count]);
            else res.push(count + '');
            is_leading = false;
            count = 0;
        }
    }
    if (res.length == 0) return "0";
    return res.join('');
};
console.log(toHex(-2147483648));