/*
135. Candy
思路：创造一个每个孩子rating和其index的映射
然后按rating大小把index排序
从rating小的孩子开始按照规则给糖果
注意左右边界单独讨论
由于使用了排序所以时间复杂度为O(nlogn)
*/
var candy = function(ratings) {
    if (ratings.length == 1) return 1;

    let indexs = [];
    let candies = new Array(ratings.length).fill(0);
    for (let i = 0; i <= ratings.length-1; i++) {
        indexs.push(i);
    }
    indexs.sort((a,b) => ratings[a]-ratings[b]);

    let total = 0;

    for (let index of indexs) {
        if (index == 0) {
            if (ratings[1] < ratings[0]) candies[0] = candies[1] +1;
            else candies[0] = 1;
            continue;
        }
        if (index == ratings.length -1) {
            if (ratings[ratings.length -2] < ratings[ratings.length -1]) {
                candies[ratings.length -1] = candies[ratings.length -2] +1;
            }
            else candies[ratings.length -1] = 1;
            continue;
        }
        if (ratings[index] > ratings[index+1] && ratings[index] > ratings[index-1]) {
            candies[index] = Math.max(candies[index-1], candies[index+1]) +1;
        }
        else if (ratings[index] <= ratings[index+1] && ratings[index] > ratings[index-1]) {
            candies[index] = candies[index-1] +1;
        }
        else if (ratings[index] > ratings[index+1] && ratings[index] <= ratings[index-1]) {
            candies[index] = candies[index+1] +1;
        } else {
            candies[index] = 1;
        }
    }

    for (let num of candies) {
        total += num;
    }

    //console.log(candies);
    return total;
};