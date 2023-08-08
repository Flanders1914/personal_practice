/**
66. Plus One
最简单的题目，没什么好说的，
最多注意一下caary归零
*/
var plusOne = function(digits) {
    let carry = 0;

    for (let i = digits.length -1; i >= 0; i--)  {

        if (i == digits.length -1) {
            digits[i] += 1;
            if (digits[i] == 10) {
                digits[i] = 0;
                carry = 1;
            }
        }
        else {
            digits[i] += carry;
            if (digits[i] == 10) {
                digits[i] = 0;
                carry = 1;
            } else {
                carry = 0;
            }
        }

    }

    if (carry) digits.unshift(1);
    return digits;
};