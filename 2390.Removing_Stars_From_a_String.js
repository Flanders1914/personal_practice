/**
2390. Removing Stars From a String
思路：stack
 */
var removeStars = function(s) {
    let res = [];
    for (let c of s) {
        if ( c == '*') {
            res.pop();
        } else {
            res.push(c);
        }
    }
    return res.join('');
};
console.log(removeStars("leet**cod*e"));