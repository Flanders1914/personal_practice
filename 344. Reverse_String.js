/**
344. Reverse String
水题
 */
var reverseString = function(s) {
    let mid = s.length >> 1;
    if (s.length % 2 == 1) {
        let l = mid -1, r = mid +1;
        while (l >= 0) {
            let temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l--;
            r++;
        }
    } else {
        let l = mid -1, r = mid;
        while (l >= 0) {
            let temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l--;
            r++;
        }
    }
    return;
};
