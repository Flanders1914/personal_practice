/*
43. Multiply Strings
用字符串实现乘法
思路：
思路不难，这里我通过实现了一个字符串加法的函数来实现字符串乘法;
注意：
细节问题很多容易出错，尤其在加法部分的索引处理
此外要判断乘积是不是0，如果是0要避免字符串操作写成'00000'
 */

function addition (num1, num2) {
    if (num1.length < num2.length) num1, num2 = num2, num1;
    let l1 = num1.length, l2 = num2.length;
    let ans = '', carry = 0;

    for (let i = l2 -1; i >= 0; i--) {
        let digit = Number(num1[i - l2 + l1]) + Number(num2[i]) + carry;
        if (digit >= 10) {
            digit = digit % 10;
            carry = 1;
        } else {
            carry = 0;
        }
        ans = digit + ans;
    }

    if (l1 == l2) {
        if (!carry) return ans;
        else return 1 + ans;
    } else {

        for (let i = l1 - l2 -1; i >= 0; i--) {
            let digit = Number(num1[i]) + carry;
            if (digit >= 10) {
                digit = digit % 10;
                carry = 1;
            } else {
                carry = 0;
            }
            ans = digit +ans;
        }

        if (!carry) return ans;
        else return 1 + ans;
    }
}

var multiply = function(num1, num2) {
    if (num1.length < num2.length) num1, num2 = num2, num1;
    let l1 = num1.length, l2 = num2.length;
    let k = 0, ans = '0';

    for (let i = l2 -1; i >= 0; i--) {
        let x = Number(num2[i]);
        let current = '';
        let digit = 0, carry = 0;
        let iszero = true;

        for (let j = l1 -1; j >= 0; j--) {
            digit = x * Number(num1[j]) + carry;
            carry = 0;
            if (digit > 0) iszero = false;

            if (digit >= 10) {
                carry = Math.floor(digit/10);
                digit = digit % 10;
            }

            current = digit + current;
        }

        if (carry > 0) current = carry + current;

        if (iszero) {
            k++;
            continue;
        }
        
        for (let j = 0; j <= k -1; j++) {
            current = current + '0';
        }

        ans = addition(current, ans);
        k++;
    }

    return ans;
};

console.log(addition('9999999','999999'));
console.log(multiply('9999999','888888'));