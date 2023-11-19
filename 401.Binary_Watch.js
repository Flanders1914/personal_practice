/**
401. Binary Watch
思路：其实是一个生成组合的题目
 */
var readBinaryWatch = function(turnedOn) {
    let h = [1,2,4,8];
    let m = [1,2,4,8,16,32];

    if (turnedOn >= 9) return [];

    let search = function(nums, k){
        let res = [];
        let work = function(index, pre, k) {
            if (k == 0) {
                res.push(pre);
                return;
            }
            else {
                for (let i = index; i <= nums.length-k; i++) {
                    work(i+1, pre + nums[i], k-1);
                }
            }
        };
        work(0, 0, k);
        return res;
    };

    let res = [];
    for (let k = 0; k <= 4; k++) {
        let n = turnedOn - k;
        if (n < 0) return res;
        if (n > 6) continue;
        let nums1 = search(h, k);
        let nums2 = search(m, n);
        for (let num1 of nums1) {
            for (let num2 of nums2) {
                let h = num1;
                let m = num2;
                if (h > 11 || m > 59) continue;
                m = (m < 10)? '0'+ m : '' + m;
                res.push(h + ':' + m);
            }
        }
    }
    return res;
};
console.log(readBinaryWatch(9));