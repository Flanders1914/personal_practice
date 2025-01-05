/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    let left = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i-1]) {
            left = i
        } else break
    }

    if (left == arr.length-1) return 0

    let right = arr.length-1
    for (let i = arr.length-2; i >= 0; i--) {
        if (arr[i] <= arr[i+1]) {
            right = i
        } else {
            break
        }
    }

    let i = 0
    let j = right
    let res = Math.min(right, arr.length-left-1)

    while (i <= left && j < arr.length) {
        if (arr[i] <= arr[j]) {
            res = Math.min(res, j-i-1)
            i++
        } else {
            j++
        }
    }
    return res
};

let  arr = [10,13,17,21,15,15,9,17,22,22,13]
console.log(findLengthOfShortestSubarray(arr))