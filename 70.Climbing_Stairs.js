/**
70. Climbing Stairs
其实就是生成一个斐波那契数列 Fibonacci sequence
注意第一层是1，第二层是2就行
*/
var climbStairs = function(n) {
    let two_past = 1, past = 2, current = 0;
    if (n == 1) return 1;
    else if (n == 2) return 2;

    for (let i = 2; i <= n -1; i++) {
        current = two_past + past;
        two_past = past;
        past = current;
    } 

    return current;
};