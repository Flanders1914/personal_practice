/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
    let bits = new Array(50).fill(0)
    let high = 0
    let temp = x
    for (let i = 0; i < 50; i++) {
        if (temp & 1 == 1) {
            bits[i] = 1
            high = i
        }
        temp = temp >> 1
        if (temp == 0) break
    }

    let index = 0
    n--
    while (n != 0) {
        if (bits[index] == 1) {
            index++
            continue
        }
        let bit = n & 1
        bits[index] = bit
        index++
        n = n >> 1
    }

    let res = 0n
    for (let i = 49; i >= 0; i--) {
        res = res << 1n
        if (bits[i] == 1) {
            res += 1n
        }
    }
    return Number(res)
};

let  n = 6715154, x = 7193485
console.log(minEnd(n, x))