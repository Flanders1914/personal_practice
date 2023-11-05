/**
282. Expression Add Operators
思路：具体思路就是将乘法转化为加法
pre 储存前一个数，有四种选择
1. 下一个数成为这个数的个位
2. 下一个数与这个数相加
3. 下一个数与这个数相减
4. 下一个数与这个数相乘
对于情况2和3，可以令 target = target - pre
然后让下一位字符成为新的pre继续递归
对于情况4，要考虑到与pre相乘的数能由多位构成，所以我们用一个循环
遍历所有可能的下一个数然后更新 pre = pre * current
注意若第一位是0不能在之后增加数位
对于情况1 我们要注意首先 pre 不能等于0， 其次 pre 不能是前面的数的乘积
否则重复搜索（之前的循环会遍历所有的数位组合）所以我们的函数传送一位sign标志前面的数是否是乘积 
 */
var addOperators = function(num, target) {
    let ans = [];
    let search = function(index, pre, res, sign) {
        if (index == num.length) {
            if (pre == target) {
                ans.push(res);
            }
            return;
        }
        let temp1 = pre;
        let temp2 = res;
        let temp3 = target;
        if (temp1 !== 0 && sign) {
            pre *= 10;
            pre += (pre > 0)? Number(num[index]) : -Number(num[index]);
            res += num[index];
            search(index+1, pre, res, true);
            pre = temp1;
            res = temp2;
        }

        target -= pre;
        pre = Number(num[index]);
        res += '+' + num[index];
        search(index+1, pre, res, true);
        target = temp3;
        pre = temp1;
        res = temp2;

        target -= pre;
        pre = - Number(num[index]);
        res += '-' + num[index];
        search(index+1, pre, res, true);
        target = temp3;
        pre = temp1;
        res = temp2;

        let current = Number(num[index]);
        res += '*' + num[index];
        search(index+1, current*pre, res, false);
        if (current == 0) {
            res = temp2;
            return;
        }

        for (let i = index+1; i <= num.length-1; i++) {
            current *= 10;
            current += Number(num[i]);
            res += num[i];
            search(i+1, current*pre, res, false);
        }
        res = temp2;
    };
    search(1, Number(num[0]), num[0], true);
    return ans;
};
console.log(addOperators("105", 5));