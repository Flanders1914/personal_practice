/*
77. Combinations
组合生成
思路： 使用递归和生成排列类似
这里采用了和之前不同的方式，之前是在每要插入一个
值的时候生成一个last的副本current然后再current上改动并传递
这次直接再last上改动并传递
注意：
1. 递归后要把last还原
2. 在最后把last插入ans时要插入last的副本不能插入last的引用！！！！

这个解法速度比较慢，有点奇怪，看最快的解法也差不多思路（
*/
var combine = function(n, k) {
    let ans = [];

    let make_combine = function(last, n, layer) {
        if (layer == 0) { 
            ans.push(last.slice());
            return;
        }

        let begin = (last.length == 0)? 1 : last.at(-1) +1;
        for (let i = begin; i <= n; i++) {
            last.push(i);
            make_combine(last, n, layer -1);
            last.pop();
        }
        return;
    };

    make_combine([], n, k);
    return ans;
};

console.log(combine(4,2));