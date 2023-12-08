/**
1431. Kids With the Greatest Number of Candies
水题
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let res = [];
    for (let candy of candies) {
        if (candy+extraCandies >= max) res.push(true);
        else res.push(false);
    }
    return res;
};