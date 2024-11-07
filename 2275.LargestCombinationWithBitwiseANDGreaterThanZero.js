/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let bits = new Array(32).fill(0)

    let count_bits = function(num) {
        let i = 0
        while (i < 32 && num != 0) {
            let bit = 1 & num
            num = num >> 1
            if (bit == 1) {
                bits[i]++
            }
            i++
        }
    }

    for (let num of candidates) {
        count_bits(num)
    }

    return Math.max(...bits)
};

let candidates = [16,17,71,62,12,24,14]
console.log(largestCombination(candidates))