/**
greedy
iterate from the last element of nums to the first element of nums
decrement each elements by a prime to make the sequence strictly increasing
make the latter elements as large as possible
so for nums[i] and nums[i-1] we need to decrement nums[i-1] by
a prime which is the smallest prime number but larger than nums[i-1] - nums[i]
 */
var primeSubOperation = function(nums) {
    let is_prime = (n) => {
        for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
            if (n % i == 0) return false
        }
        return true
    }

    let primes = new Array(1001).fill(0)
    let pre = -1
    for (let i = 1000; i >= 2; i--) {
        if (is_prime(i)) {
            primes[i] = pre
            pre = i
        } else {
            primes[i] = pre
        }
    }
    primes[0] = 2
    primes[1] = 2

    for (let i = nums.length-1; i >= 1; i--) {
        let current = nums[i]
        let next = nums[i-1]
        if (next-current >= 0) {
            let diff = next - current
            let prime = primes[diff]
            if (prime == -1 || prime >= next) return false
            nums[i-1] -= prime
        }
    }

    return true
};

let nums = [18,12,14,6]
console.log(primeSubOperation(nums))