/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length < b.length) {
        let c = a;
        a = b;
        b = c;
    }
    let ans = '';
    let i = a.length -1, j = b.length -1, carry = 0;

    while (j >= 0) {
        let current = Number(a[i]) + Number(b[j]) + carry;
        if (current >= 2) {
            current = current -2;
            carry = 1;
        } else carry = 0;

        ans = current + ans;
        i--;
        j--;
    }

    while (i >= 0) {
        let current = Number(a[i]) + carry;
        if (current == 2) {
            carry = 1;
            current = 0;
        } else carry = 0;
        ans = current + ans;
        i--;
    }

    if (carry) return ('1' + ans);
    else return ans;
};

console.log(addBinary('1','111111'))