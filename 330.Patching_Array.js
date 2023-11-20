/**
330. Patching Array
思路: 贪心
这种题先写几个情况发现规律
观察得到：如果前k项可以组成 1...ceil的所有值
对于下一项 num 如果 num <= ceil+1 那么对于前k+1项可以组成1...ceil+num的所有值
如果 num > ceil+1 情况有点复杂
首先我们要让和为ceil+1的情况存在，最好的方法是直接添加ceil+1, 其实添加1...ceil也能获得ceil+1,但添加ceil+1可以使得新ceil最大
那么 我们得到了1...2ceil+1的所有值
再比较 新的 ceil(=2ceil+1) 和 num-1的大小， 若还不满足条件那么我们继续直到 num <= ceil+1 为止
注意不要在达成条件后忘记添加num
注意每次更新ceil都要判断一次ceil是否已经满足了条件 ceil >= n
 */
var minPatches = function(nums, n) {
    let res = 0;
    let ceil = 0;
    for (let num of nums) {
        if (ceil >= n) return res;
        if (num-1 > ceil) {
            while (ceil < num -1) {
                let add = ceil+1; // 获得ceil+1的最好方式是直接添加 ceil+1
                ceil += add;
                res++;
                if (ceil >= n) return res; // 每改变一次ceil 判断一次是否达标
            }
        }
        ceil += num;
    }
    while (ceil < n) { // 当用尽所有num后，我们添加ceil+1然后更新ceil，直到ceil >= n 为止
        res++;
        ceil += ceil+1;
    }
    return res;
};
let nums = [1,2,32], n = 2147483647;
console.log(minPatches(nums, n));