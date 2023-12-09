/**
363. Max Sum of Rectangle No Larger Than K
思路：
首先我们研究寻找nums数组中 小于等于k的最大subarray和
首先我们获得到i的累加和Si，于是subaray (i,j] 的和 = Sj - Si
由于 Sj - Si <= k 于是对于任意的Sj 我们需要寻找的Si 必须满足 Si >= Sj - k
由于我们要取最大的subarray，所以我们需要对每个Sj 寻找满足条件的最小Si
于是我们可以用一个cums数组储存j之前的Si,并以升学排列，用二分查找法找到最小的那个满足条件的Si
如果所有的num均 >= 0 那么这个cums数组可以在每次迭代后将当前Sj push到尾部而得
若存在 num < 0 我们至少要浪费O(n)时间维护cums以让其保证增序
所以当 num >= 0 时 时间复杂度 O(nlogn) 存在num< 0 O(nlogn)-O(n^2)

我们可以将原题的二维矩阵转化为一维的数组求不大于k的subarray和
方法是固定上边所在的行和矩形的高度，让矩形向右一维拓展
 */
function find_min(arr, target) {
    if (arr.at(-1) < target) return arr.at(-1);
    let l = 0, r = arr.length-1;
    while (l <= r) {
        let mid = (l+r) >> 1;
        if (mid == l) {
            if (arr[mid] < target) return arr[r];
            else return arr[mid];
        }
        if (arr[mid] >= target) r = mid;
        else l = mid;
    }
}

var maxSumSubmatrix = function(matrix, k) {
    let m = matrix.length;
    let n = matrix[0].length;
    for (let j = 0; j <= n-1; j++) {
        for (let i = 1; i <= m-1; i++) {
            matrix[i][j] += matrix[i-1][j];
        }
    }
    let res = -Number.MAX_VALUE;
    for (let h = 1; h <= m; h++) {
        for (let i = 0; i+h <= m; i++) {
            let cum  = 0;
            let cums = [0];
            for (let j = 0; j <= n-1; j++) {
                let current = (i == 0)? matrix[i+h-1][j] : matrix[i+h-1][j] - matrix[i-1][j];
                cum += current;
                let temp = find_min(cums, cum-k);
                if (cum - temp <= k) {
                    res = Math.max(res, cum - temp);
                    if (res == k) return k;
                }
                if (cum >= cums.at(-1)) cums.push(cum);
                else {
                    let next = [];
                    let not_pushed = true;
                    for (let item of cums) {
                        if (item < cum) next.push(item);
                        else {
                            if (not_pushed) {
                                next.push(cum);
                                next.push(item);
                                not_pushed = false;
                            }else next.push(item);
                        }
                    }
                    cums = next;
                }
            }
        }
    }
    return res;
};
let matrix = [[27,5,-20,-9,1,26,1,12,7,-4,8,7,-1,5,8],[16,28,8,3,16,28,-10,-7,-5,-13,7,9,20,-9,26],[24,-14,20,23,25,-16,-15,8,8,-6,-14,-6,12,-19,-13],[28,13,-17,20,-3,-18,12,5,1,25,25,-14,22,17,12],[7,29,-12,5,-5,26,-5,10,-5,24,-9,-19,20,0,18],[-7,-11,-8,12,19,18,-15,17,7,-1,-11,-10,-1,25,17],[-3,-20,-20,-7,14,-12,22,1,-9,11,14,-16,-5,-12,14],[-20,-4,-17,3,3,-18,22,-13,-1,16,-11,29,17,-2,22],[23,-15,24,26,28,-13,10,18,-6,29,27,-19,-19,-8,0],[5,9,23,11,-4,-20,18,29,-6,-4,-11,21,-6,24,12],[13,16,0,-20,22,21,26,-3,15,14,26,17,19,20,-5],[15,1,22,-6,1,-9,0,21,12,27,5,8,8,18,-1],[15,29,13,6,-11,7,-6,27,22,18,22,-3,-9,20,14],[26,-6,12,-10,0,26,10,1,11,-10,-16,-18,29,8,-8],[-19,14,15,18,-10,24,-9,-7,-19,-14,23,23,17,-5,6]], k = -100;
console.log(maxSumSubmatrix(matrix, k));