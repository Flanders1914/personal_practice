/**
299. Bulls and Cows
思路：运用两个hash表
memo存储secret中非直接对应的char
hash纯粹直接对应的char的坐标
 */
var getHint = function(secret, guess) {
    let memo = new Map();
    let hash = new Set();
    let a = 0, b = 0;
    for (let i = 0; i <= secret.length -1; i++) {
        if (secret[i] == guess[i]) {
            hash.add(i);
            a++;
        }
        else {
            if (memo.has(secret[i])) memo.set(secret[i], memo.get(secret[i])+1);
            else memo.set(secret[i], 1);
        }
    }
    for (let i = 0; i <= guess.length-1; i++) {
        if (hash.has(i)) continue;
        else if (memo.get(guess[i])) {
            memo.set(guess[i], memo.get(guess[i])-1);
            b++;
        }
    }
    return `${a}A${b}B`
};
let secret = "1123", guess = "0111";
console.log(getHint(secret, guess));