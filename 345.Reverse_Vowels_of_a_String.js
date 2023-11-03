/**
345. Reverse Vowels of a String
思路：标注位置然后交换值
注意：string不能直接修改
 */
var reverseVowels = function(s) {
    s = s.split('');
    let indexes = [];
    for (let i = 0; i <= s.length -1; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o'||
        s[i] == 'u' || s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U') {
            indexes.push(i);
        }
    }
    let l = 0, r= indexes.length -1;
    while (l < r) {
        let temp = s[indexes[l]];
        s[indexes[l]] = s[indexes[r]];
        s[indexes[r]] = temp;
        l++;
        r--;
    }
    return s.join('');
};
console.log(reverseVowels("eo"));