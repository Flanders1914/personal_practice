/*
8. String to Integer (atoi)
思路：
一步步进行处理：
1. 去除首尾的空格
2. 判断符号并去除符号
3. 去除非数字的尾部
4. 去除所有首部0
5. 判断数字是否在 64bit int范围内并做相应输出
注意：
1. Number(非数字字符) 为 NaN, NaN和任何值（包括自身）比较都是false，NaN
转化为boolean类型为false；使用!Number(s[i]) 判断 s[i] 是否为非数字字符时需要
排除 Number('0') == 0 == false 这种情况
2. Number('') == Number(null) == 0 所以空字符串可以不用做特殊处理
 */

var myAtoi = function(s) {
   s = s.trim();
   let sign;

   if (s[0] === '-') {
    sign = false;
    s = s.slice(1);
   } else if (s[0] == '+') {
    sign = true;
    s = s.slice(1);
   } else sign = true;


   for (let i = 0; i < s.length; i++) {

    if ( !Number(s[i]) && s[i] != '0') {
        s = s.slice(0, i);
        break;
    }

   }


   if (s.length == 0) return 0;
   let ans_str = ''


   for (let i = 0; i< s.length; i++) {
    if (s[i] != '0') {
        ans_str = s.slice(i);
        break;
    }
   }


   if (sign) {
    if (ans_str.length < 10) return Number(ans_str);
    else if (ans_str.length == 10 && ans_str <= "2147483647") return Number(ans_str);
    else return 2147483647;
   } else {
    if (ans_str.length < 10) return - Number(ans_str);
    else if (ans_str.length == 10 && ans_str <= "2147483648") return - Number(ans_str);
    else return -2147483648;
   }
};

console.log(myAtoi("00000000"));
console.log(Number(''));
console.log(NaN === NaN);
console.log(Number('0') == 0 == false)