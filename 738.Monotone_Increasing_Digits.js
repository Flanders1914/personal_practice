/**
738. Monotone Increasing Digits
思路：贪心，略微有点tricky
1.先将数字转化为数位的数组
然后从左到右迭代
若当前digit >= 之前的digit 继续
若当前的digit < 之前的digit，方法是从之前的digit
开始向前迭代，寻找改动的digit，对于迭代中每个digit
先将当前digit-1， 之后的digit改为9，若当前digit == 0 输出 digit数量-1个9的重复作为答案
若减一后的digit能 >= 之前的digit 即找到了损失最小且能够维持递增性质的改动数位
在改动数位后所有的digit变为9
 */
var monotoneIncreasingDigits = function(n) {
    let digits  = [];
    n = n + "";
    for (let c of n) {
        digits.push(Number(c));
    }

    let mutated = false;
    for (let i = 1; i <= digits.length-1; i++) {
        if (mutated) {
            digits[i] = 9;
            continue;
        }
        if (digits[i-1] <= digits[i]) continue;
        else {
            mutated = true;
            let index = i-1;
            while (index >= 0) {
                digits[index+1] = 9; // 注意将改动数位之后的位改成9
                digits[index]--;
                if (digits[index] == 0) return '9'.repeat(digits.length-1);
                if ((index - 1 >= 0) && (digits[index-1] <= digits[index])) break;
                index--;
            }
        }
    }
    return digits.join('');
};
console.log(monotoneIncreasingDigits(120));