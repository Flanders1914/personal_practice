/**
260. Single Number III
思路：将nums分为两组，每一组中只有一个单独的数
先将所有数异或，产生的x必然不为0
  x = x & (~x + 1)提取右侧第一个不为0的位，两个单独的数必然一个数该位是0，另一个数该位是1
  根据 x & num 将nums分为两组
 */
var singleNumber = function(nums) {
    let x = 0;
    for (let num of nums) {
        x = x ^ num;
    }
    x = x & (~x + 1);
    let a = 0, b = 0;
    for (let num of nums) {
        if ((x & num) == 0) a = a ^ num;
        else b = b ^ num;
    }
    return ([a,b]);
};
console.log(singleNumber([1,2,1,3,2,5]));