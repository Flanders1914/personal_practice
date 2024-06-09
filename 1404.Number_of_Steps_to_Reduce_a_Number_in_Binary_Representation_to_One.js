/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    const getVal = (i) => s.charCodeAt(i) - 48;
    let res = 0;
    let sign = 0;
    for (let i = s.length-1; i >= 0; i--) {
        if (sign == 0) {
            if (i == 0) return res;
            if (getVal(i) == 0) {
                res++;
                continue;
            } else {
                res += 2;
                sign = 1;
                continue;
            }
        }
        if (getVal(i) == 1) res++;
        else res+= 2;
    }

    return res;
};