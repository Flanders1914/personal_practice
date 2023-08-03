/*
50. Pow(x, n)
思路：这题的意思是用循环模拟power
和之前的除法题一样的思路。这里利用了一个cache数组实现了
ans的指数以指数速率(2^count)增长，由于不想在实现中使用 **
所以cache还需要储存相应的 2^count
*/
var myPow = function(x, n) {
    let ans = 1, exponent = 0, sign = true;
    let cache = [[x, 1]], count = 0;

    if (n === 0 ) return 1;
    if (n < 0) {
        sign = false;
        n = -n;
    }

    while (exponent != n) {
        // 首先判断 指数(2^count) 在不在储存的cache内，不在就用cache最后一项更新
        if (count > cache.length -1) {
            let last = cache.at(-1);
            cache.push([last[0] * last[0], last[1] + last[1]]);
        }
        // 当ans的指数加cache存储的指数过大，在cache的取值向左移动
        if (exponent + cache[count][1] > n) {
            count--;
            continue;
        }
        // 当ans的指数加cache存储的指数 <= n, 更新ans，cache取值右移
        else {
            ans *= cache[count][0];
            exponent += cache[count][1];
            count++;
        }
    }

    if (sign) return ans
    else return (1/ans);
};

console.log(myPow(2.10000, 3));