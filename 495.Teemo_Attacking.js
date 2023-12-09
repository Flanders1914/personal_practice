/**
495. Teemo Attacking
注意 duration == 0
和区间上下界
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let res = 0;
    let end = timeSeries[0]+duration-1;
    let begin = timeSeries[0];
    if (duration == 0) return 0;
    for (let i = 1; i <= timeSeries.length-1; i++) {
        if (timeSeries[i] > end) {
            res += end - begin +1;
            begin = timeSeries[i];
            end = begin + duration -1;
        } else {
            res += timeSeries[i] - begin;
            begin = timeSeries[i];
            end = begin + duration -1;
        }
    }
    return res + end - begin +1;
};
let timeSeries = [1,4], duration = 2;
console.log(findPoisonedDuration(timeSeries, duration));