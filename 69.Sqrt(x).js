/*
69. Sqrt(x)
取平方根
方法是寻找 n^2 <= x并且(n+1)^2 >= x 的n
这里又运用了经典的指数增长法
*/
var mySqrt = function(x) {
    let increment = 2;
    let a = 0;

    while(true) {
        if (a*a <= x && (a+1)*(a+1) >x) return a;
        let next = a + increment;
        if (next*next > x) {
            increment = 2;
            a = a + 1;
        } 
        else {
            a = next;
            increment += increment;
        }
    }
};

console.log(mySqrt(2000000))