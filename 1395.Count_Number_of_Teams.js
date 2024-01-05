/**
1395. Count Number of Teams
思路：dp
dp1[i] 表示在rating[i]之前比rating[i] 小元素的数量
dp2[2] 表示在rating[i]之前比rating[i] 大元素的数量

从 i-1 到 0 循环
若当前元素rating[j] < rating[i] dp1[i]++; res += dp1[j]
若当前元素rating[j] > rating[i] dp2[i]++; res += dp2[j]
 */
var numTeams = function(rating) {
    let dp1 = new Array(rating.length).fill(0);
    let dp2 = new Array(rating.length).fill(0);
    let res = 0;
    
    for (let i = 1; i <= rating.length-1; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (rating[i] > rating[j]) {
                dp1[i]++;
                res += dp1[j];
            }
            if (rating[i] < rating[j]) {
                dp2[i]++;
                res += dp2[j];
            }
        }
    }
    return res;
};

console.log(numTeams([2,5,3,4,1]));