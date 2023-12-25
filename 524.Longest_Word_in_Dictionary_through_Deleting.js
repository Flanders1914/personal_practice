/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
function compare(current, s) {
    let i = 0;
    let j = 0;
    while (i < current.length && j < s.length) {
        if (current[i] == s[j++]) i++;
    }
    if (i == current.length) return true;
    else return false;
}

var findLongestWord = function(s, dictionary) {
    dictionary.sort((a, b) => {
        if (a.length != b.length) return b.length - a.length;
        else {
            if (a < b) return -1;
            else return 1;
        }
    });
    for (let current of dictionary) {
        if (current.length > s.length) continue;
        if (compare(current, s)) return current;
    }
    return '';
};
let s = "abce";
let dictionary = ["abe","abc"];
console.log(findLongestWord(s, dictionary));