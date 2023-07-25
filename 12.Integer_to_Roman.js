/**
12. Integer to Roman
1 <= num <= 3999
思路：
hardcode每一种情况，对于 [1000,100) [100,10) [10,1)
这些区间，处理的代码其实是非常类似的，复制粘贴并修改即可。
 */
var intToRoman = function(num) {
  let ans = '';
  let k;

  // 1000~100 的情况
  k = Math.floor(num/1000);
  num = num % 1000;
  for (let i = 0; i < k; i++) ans = ans + "M";

  if (num >= 900) {
    ans = ans + "CM";
    num = num - 900;
  }

  if (num >= 500) {
    ans = ans + "D";
    num = num - 500;
  }

  if (num >= 400) {
    ans = ans + "CD";
    num = num - 400;
  }

  // 100~10 的情况
  k = Math.floor(num/100);
  num = num % 100;
  for (let i = 0; i < k; i++) ans = ans + "C";

  if (num >= 90) {
    ans = ans + "XC";
    num = num - 90;
  }

  if (num >= 50) {
    ans = ans + "L";
    num = num - 50;
  }

  if (num >= 40) {
    ans = ans + "XL";
    num = num - 40;
  }
  // 10~1 的情况
  k = Math.floor(num/10);
  num = num % 10;
  for (let i = 0; i < k; i++) ans = ans + "X";

  if (num >= 9) {
    ans = ans + "IX";
    num = num - 9;
  }

  if (num >= 5) {
    ans = ans + "V";
    num = num - 5;
  }

  if (num >= 4) {
    ans = ans + "IV";
    num = num - 4;
  }

  // 处理剩余的1
  for (let i = 0; i < num; i++) ans = ans + "I";
  return ans;
};

console.log(intToRoman(1990));