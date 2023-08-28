/*
137. Single Number II
思路：统计每一位出现1的次数
然后将每一位mod 3 得到的数即为答案

JS 中 >> 是保留符号的右移。最左侧的数位被从左侧推入，最右侧的数位被移出。
& 运算是对二进制每一位求一个and，因此， n & 1 是取n二进制最低位

*/
var singleNumber = function(nums) {
    const bits = new Array(32).fill(0);

    for (let num of nums) {
        if (num < 0) { // 由于<<带符号，所以对于符号需要单独的讨论
            bits[31] += 1;
            num = -num;
        }
        for (let k = 1; k <= 31; k++) {
            bits[k-1] += num & 1;
            num = num >> 1;
        }
    }

    let ans = 0;
    let sign = bits.pop();

    while (bits.length) {
        ans = ans * 2;
        ans += bits.pop() % 3;
    }

    if (sign % 3) {
        if (ans == 0) return -(2 ** 31);
        else return -ans;
    }
    else return ans;
};

console.log(singleNumber([-2147483648]));