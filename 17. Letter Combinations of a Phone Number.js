/**
 * @param {string} digits
 * @return {string[]}
 */

var dic = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
]);

var ans = []

function MakeCombinations(digits, combination) {
    if (digits.length == 0) ans.push(combination);
    else {
        let represented_letters = dic.get(digits[0])
        for (let i = 0; i < represented_letters.length; i++) {
            MakeCombinations(digits.slice(1), combination + represented_letters[i]);
        }
    }
}

var letterCombinations = function(digits) {

    ans = [];
    MakeCombinations(digits, '');
    if (ans[0] == '') return []
    return ans;

};

console.log(letterCombinations('23'));