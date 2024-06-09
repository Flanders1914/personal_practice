/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let res = 0;
    for (let j = 1; j < arr.length; j++) {
        let map = new Map();
        let left = arr[j-1];
        map.set(left, 1);
        for (let i = j-2; i >= 0; i--) {
            left ^= arr[i];
            if (map.has(left)) map.set(left , map.get(left) +1);
            else map.set(left, 1);
        }

        let right = arr[j];
        if (map.has(right)) res += map.get(right);
        for (let k = j+1; k < arr.length; k++) {
            right ^= arr[k];
            if (map.has(right)) res += map.get(right);
        }
    }

    return res;
};