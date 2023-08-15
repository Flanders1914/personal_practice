/**
89. Gray Code
思路：不难发现
有n个二进制digit的gray code 序列 seq[n]满足以下递推关系：
seq[n] = seq[n-1] + seq[n-1](倒序遍历每个元素并 + 2^(n-1))
原因：
1. 不考虑最左边的digit，其他digit的变化序列可以为seq[n-1]
2. 先让最左边digit = 0，得到序列 seq[n-1]
3. 再让最左边digit = 1，其余的digit要按照seq[n-1]的到序变化返回到0
得到序列 2^(n-1) + 倒序的seq[n-1]
4. 组合在一起就是seq[n-1]
*/
var grayCode = function(n) {
    let ans = [0];
    for (let i = 1; i <= n; i++) {
        let temp = ans.slice();
        for (let k = temp.length -1; k >= 0; k--) {
            ans.push(temp[k] + 2 **(i-1));
        }
    }

    return ans;
};

console.log(grayCode(5));