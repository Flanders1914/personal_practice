/**
204. Count Primes
计算给定n内的素数
方法：筛选法
每次筛掉有因数k的数
这里先筛掉了所有的偶数
之后需要筛的数都是奇数，所以只需遍历奇数因数k的奇数倍
注意：不要漏掉2
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;
    let hash = new Array(n).fill(true);
    for (let i = 0; i < n; i += 2) hash[i] = false;
    hash[1] = false;
    hash[2] = true;

    for (let i = 3; i*i < n; i += 2) {
        if (hash[i]) {
            let count = 3;
            while (count * i < n) {
                hash[count*i] = false;
                count += 2;
            }
        }
    }

    return hash.filter((val) => val).length;
};
console.log(countPrimes(100))
