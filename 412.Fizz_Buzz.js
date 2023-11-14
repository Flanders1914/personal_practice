/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        c1 = (i % 3 == 0);
        c2 = (i % 5 == 0);
        if ( c1 && c2) res.push("FizzBuzz");
        else if (c1) res.push("Fizz");
        else if (c2) res.push("Buzz");
        else res.push(i+'');
    }
    return res;
};