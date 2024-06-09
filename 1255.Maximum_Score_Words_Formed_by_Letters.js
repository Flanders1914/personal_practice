/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    const memo = new Map();
    const state = new Array(26).fill(0);
    const nums = new Array(26);

    for (let letter of letters) {
        state[letter.charCodeAt(0) - 97]++;
    }

    const getStateCode = function(index) {
        let res = "" + index;
        for (let i = 0; i < 26; i++) {
            if (state[i] == 0) continue;
            res += String.fromCharCode(97 + i) + state[i];
        }
        return res;
    };

    const search = function(index) {
        if (index == words.length) return 0;
        let stateCode = getStateCode(index);
        if (memo.has(stateCode)) return memo.get(stateCode);

        let res1 = search(index+1);

        nums.fill(0);
        let wordScore = 0;
        for (let c of words[index]) {
            wordScore += score[c.charCodeAt(0) - 97];
            nums[c.charCodeAt(0) - 97]++;
        }

        for (let i = 0; i < 26; i++) {
            if (nums[i] > state[i]) {
                memo.set(stateCode, res1);
                return res1;
            }
        }
        
        for (let i = 0; i < 26; i++) {
            state[i] -= nums[i];
        }

        let res2 = search(index+1);

        nums.fill(0);
        for (let c of words[index]) {
            nums[c.charCodeAt(0) - 97]++;
        }

        for (let i = 0; i < 26; i++) {
            state[i] += nums[i];
        }

        if (res1 > (res2 + wordScore)) {
            memo.set(stateCode, res1);
            return res1;
        } else {
            memo.set(stateCode, res2+wordScore);
            return res2+wordScore;
        }
    }

    return search(0);
};

let words = ["ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
console.log(maxScoreWords(words, letters, score));