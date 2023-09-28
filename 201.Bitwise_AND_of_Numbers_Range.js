/**
201. Bitwise AND of Numbers Range
思路：
每次循环使left和right分别向右移动一位，直到left == right
将剩下的left向左移动迭代的次数

原因：
只有二进制长度相同的left和right才能产生非0的值
答案为从左侧开始所有left和right相同的二进制位并在右侧填充上0
 */
var rangeBitwiseAnd = function(left, right) {
    let i = 0;
    while (left != right) {
      left = left >> 1;
      right = right >> 1;
      i++;
    }
    return left << i;
  };
console.log(rangeBitwiseAnd(5,7));