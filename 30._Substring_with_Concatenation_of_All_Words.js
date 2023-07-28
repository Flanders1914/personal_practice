/*
30. Substring with Concatenation of All Words
思路：
1. 使用两个map ，一个用作参考的hash_table，一个在每次判断中记录的record
2. 若从i开始的substring是一个目标substring，hash_table 和 record应该相同
3. 其他无难点，注意编程细节
注意：
1. words是可以有重复的word，因为这个下面的程序重写了一遍
2. 注意清理record count current_word
3. 时间复杂度O(s.length * word.length * word[0].length) 应该有更快的解
 */
var findSubstring = function(s, words) {
    let m = words.length * words[0].length;
    let hash = new Map(), record = new Map();
    let current_word = '';
    let ans = [];

    for (let word of words) {
        if (!hash.has(word)) hash.set(word, 1);
        else hash.set(word, hash.get(word) +1);
    }

    outer: for (let i = 0; i <= s.length - m; i++) {

        current_word = s.slice(i, words[0].length + i);

        if (hash.has(current_word)) {

            record.clear();
            let count = 0;
            current_word = '';

            for (let j = i; j <= i + m -1; j++) {
                count ++;
                current_word = current_word + s[j];
                if (count == words[0].length) {
                    count = 0;
                    if (!record.has(current_word)) {
                        record.set(current_word, 1);
                        current_word = '';
                    } else {
                        if (hash.get(current_word) > record.get(current_word)) {
                            record.set(current_word, record.get(current_word) +1);
                            current_word = '';
                        } else break;
                    }
                }
            }

            for (let key of hash.keys()) {
                if (hash.get(key) !== record.get(key)) {
                    continue outer;
                }
            }
            ans.push(i);
            record.clear();
        } 
        
    }

    return ans;
};

console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]))