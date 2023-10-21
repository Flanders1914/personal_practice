/**
264. Ugly Number II
思路：对于任何一个uglyNumber都是由之前的uglyNumber乘2，3，5得到
从1开始，每一次取*2/3/5的最小值为下一个数，然后将乘数对应的被乘数坐标往后移动一格，每一次
乘数2/3/5的被乘数由相应的坐标i2/i3/i5从之前生成的uglynumber中取得
 */
var nthUglyNumber = function(n) {
    let nums = [1];
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;

    while (nums.length < n) {
        let n2 = nums[i2] * 2;
        let n3 = nums[i3] * 3;
        let n5 = nums[i5] * 5;
        nums.push(Math.min(n2,n3,n5));
        if (nums.at(-1) == n2) i2++;
        if (nums.at(-1) == n3) i3++;
        if (nums.at(-1) == n5) i5++;
    }
    return nums.at(-1);
};
console.log(nthUglyNumber(10));