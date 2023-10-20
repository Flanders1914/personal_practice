/**
216. Combination Sum III
思路：利用递归模拟多层迭代，按从小到大寻找解
 */
var combinationSum3 = function(k, n) {
    if (n > 45) return [];
    let ans = [];
    let makeCombination = function(previous, i, k, n) {
        if (k == 0) { //k代表可用的数字的数量，k==0时结束递归
            if (n == 0) {
                ans.push(previous.slice());
            }
            return;
        }
        if (n == 0) return; //previous中存储的数字和已经等于target，此时k>0，所以退出递归
        for (let num = i; num <= 9; num++) {
            if (((n - num) > num)||(n -num == 0)) {
                previous.push(num);
                makeCombination(previous, num+1, k-1, n-num);
                previous.pop();
            }
        }
    };
    makeCombination([], 1, k, n);
    return ans;
};

for (let row of combinationSum3(3,9)) console.log(row);