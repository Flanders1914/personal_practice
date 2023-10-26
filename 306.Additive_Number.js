/**
306. Additive Number
思路：遍历前两个数的组合
然后通过前两个数生成所有数，比较所有的数和num
这种做法不太好，首先由于数比较大所以需要用bigint
其次其实通过第三个数就能判断前两个数的组合是否valid
最好是用字符串写一个高精度加法来做
*/
var isAdditiveNumber = function(num) {
    let isTrue = function(a, b, num) {
        let total = '' + a + b;
        if (total.length == num.length) return false;
        while (total.length < num.length) {
            b = a + b;
            a = b - a;
            total = total + b;
        }
        if (total.length == num.length && total == num) return true;
        else return false;
    };

    let len = num.length;
    if (len < 3) return false;

    let current1 = 0n;
    let current2 = 0n;
    for (let i = 0; i <= (len >> 1) -1; i++) {
        current1 *= 10n;
        current1 += BigInt(Number(num[i]));
        if (num[i+1] == '0') {
            if (isTrue(current1, 0n, num)) return true;
            else continue;
        }
        current2 = 0n;
        for (let j = i+1; j <= (len-i-1)>> 1 -1; j++) {
            current2 *= 10n;
            current2 += BigInt(Number(num[j]));
            if (isTrue(current1, current2, num)) return true;
        }
    }
    return false;
};
console.log(isAdditiveNumber("1999999999999999910000000000000000"));