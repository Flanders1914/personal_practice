/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
/*
470. Implement Rand10() Using Rand7()
思路1：若rand7() > 2(3,4,5,6,7) 选择到每一个值的可能性为20%
若rand7() <= 2 选到每一个值的可能性为50%
组合到一起便能产生10个等可能不同结果
思路2：数学
一个重要结论： "(randN - 1)*N + randN" is the uniform random variable rand{N^2}.
即 (randN-1)*N + randN 相当于 rand{N^2}
以下是解
var rand10 = function() {
    let num;
    do {
        num = rand7() + ((rand7() - 1) * 7);
    } while (num > 40);
    return 1 + ((num - 1) % 10);
};
相同题目 从rand6 获取rand8
*/
var rand10 = function() {
    let ran1 = rand7();
    while (ran1 < 3) ran1 = rand7();
    let ran2 = rand7();
    while (ran2 > 2) ran2 = rand7();
    if (ran1 == 3) {
        if (ran2 == 1) return 1;
        else return 2;
    } else if (ran1 == 4) {
        if (ran2 == 1) return 3;
        else return 4;
    } else if (ran1 == 5) {
        if (ran2 == 1) return 5;
        else return 6;
    } else if (ran1 == 6) {
        if (ran2 == 1) return 7;
        else return 8;
    } else {
        if (ran2 == 1) return 9;
        else return 10;
    } 
};