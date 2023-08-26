/*
135. Candy
该题更优越的一种解 时间复杂度 O(n) 空间复杂度O(1) 除开ratings数组
思路：
若 ratings[i] > ratings[i+1]
我们一直前进到使该条件不成立的index ratings[index] <= ratings[index+1]
此时最优解肯定是给index孩子1个candy 从index回退到i每个孩子多1个,到孩子i 拿index-i+1个
注意对于孩子i如果 ratings[i] > ratings[i-1] 且 前一个孩子拿的糖果 previous >= index-i+1
那么孩子i要拿previous+1个
我们可以同时更新孩子i到孩子index的糖果数

若 ratings[i] <= ratings[i+1]
那么孩子i的糖果只与前一个孩子有关，利用记录前一个孩子的糖果数的previous即可求出
*/
var candy = function(ratings) {
    if (ratings.length == 1) return 1;
    let total = 0;
    let previous = 0;
    for (let i = 0; i <= ratings.length -1; i++) {
        if (ratings[i] > ratings[i+1]) {
            let index = i;
            while (index <= ratings.length-2 && 
                ratings[index] > ratings[index+1]) {
                index++;
            }
            if (i == 0 || ratings[i] == ratings[i-1] ) {
                total += (index-i+1)*(index-i+2)/2;
                previous = 1;
            } else { // ratings[i] > ratings[i-1]
                if (previous < index-i+1) {
                    total += (index-i+1)*(index-i+2)/2;
                    previous = 1;
                } else {
                    total += (index-i+1)*(index-i+2)/2 + previous-index +i
                    previous = 1;
                }
            }
            i = index;
        } else { // ratings[i] <= ratings[i+1]
            if (i == 0 || ratings[i] <= ratings[i-1]) {
                total += 1;
                previous = 1;
            }
            else {
                previous++;
                total += previous;
            }
        }
    }
    return total;
};