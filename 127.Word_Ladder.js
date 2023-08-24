/*
127. Word Ladder
本质是一个图论问题：给一个图求从起点到终点的最短距离
每个word是一个vertex，相邻的vertex是改变一个字母就能达到的word

所以有两种做法：宽搜和动态规划
下面的代码使用了宽搜，并利用set优化搜索，不过只打败了不到一半的题解
所以肯定存在更优越的动态规划解
*/
var ladderLength = function(beginWord, endWord, wordList) {


    function canTransfer(s1, s2) {
        differentCharExist = false;
        for (let i = 0; i <= s1.length -1; i++) {
            if (s1[i] == s2[i]) continue;
            else {
                if (differentCharExist) {
                    return false;
                } else differentCharExist = true;
            }
        }
        return true;
    }


    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    if (canTransfer(beginWord, endWord)) return 2;
    let cache = [];
    for (let word of wordSet) {
        if (canTransfer(beginWord, word)) {
            cache.push(word);
            wordSet.delete(word);
        }
    }

    let count = 2;

    while (cache.length) {
        //console.log(cache.map((index) => wordList[index]));
        let next = [];
        for (let word1 of cache) {
            for (let word2 of wordSet) {
                if (canTransfer(word1, word2)) {
                    if (word2 == endWord) return count + 1;
                    wordSet.delete(word2);
                    next.push(word2);
                }
            }
        }
        count++;
        cache = next;
    }

    return 0;
 
};

let beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"];
console.log(ladderLength(beginWord, endWord, wordList));