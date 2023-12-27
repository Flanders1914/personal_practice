/**
528. Random Pick with Weight
思路：二分查找
我们构造一个sum数组存储当前w即之前所有w的总和
我们用所有的w的总和为上限，0为下限随机生成一个数
利用二分查找找到 total[i] > pick 的最小i
即为答案
 */
var Solution = function(w) {
    this.sum = [w[0]];
    for (let i = 1; i <= w.length-1; i++) {
        this.sum.push(this.sum[i-1]+w[i]);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let val = Math.floor(Math.random()*this.sum.at(-1));
    let l = 0;
    let r = this.sum.length-1;
    while (l <= r) {
        let mid = (l+r) >> 1;
        if (l == mid) {
            if (this.sum[l] > val) return l;
            else return r;
        }
        if (this.sum[mid] < val) l = mid;
        else if (this.sum[mid] == val) return mid+1;
        else r = mid;
    }

};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */