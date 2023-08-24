/*
126. Word Ladder II
是127. Word Ladder的复杂版，要求输出所有满足条件的序列
思路沿用了 宽搜+递归
不过这里为了输出所有解，构造了一个单向图的数据结构，导致看起来有点复杂

这道题的动态规划解应该更快速且简洁
*/
var findLadders = function(beginWord, endWord, wordList) {
    //这个函数用来判断两个word是否可以相互转化（只有一个字母不同）
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

    //单向图的节点构造函数，this.previous储存该节点向上能连接到的节点的引用
    function MakeNode(val = '', previous = []) {
        this.val = val;
        this.previous = previous;
    }

    //单向图的输出函数，输出从begin到node的路径
    function make_ans(node) {
        let ans = [];
        const search_ans = function(node, last) {
            if (node.previous.length == 0) {
                let stack = last.slice();
                stack.push(node.val);
                ans.push([]);
                while (stack.length > 0) {
                    ans[ans.length -1].push(stack.pop());
                }
                return;
            }
            for (let next of node.previous) {
                last.push(node.val);
                search_ans(next, last);
                last.pop();
            }
        }
        search_ans(node, []);
        return ans;
    }

    //主函数
    //将wordList Set化，判断set中是否有起点和终点
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];
    if (wordSet.has(beginWord)) wordSet.delete(beginWord); //删除set中的起点，优化搜索
    if (canTransfer(beginWord, endWord)) return [[beginWord, endWord]];

    let cache = []; // cache储存上一层搜索的节点
    let begin = new MakeNode(beginWord);

    for (let word of wordSet) {
        if (canTransfer(beginWord, word)) { //第一层搜索，其实可以不用单独写
            let node = new MakeNode(word, [begin]);
            cache.push(node);
            wordSet.delete(word)
        }
    }

    while (cache.length) {
        let next = [];
        let is_finish = false; // is_finish 储存是否到达终点的状态
        // 宽搜：对于上一层搜索到的每一个节点，在WordSet中寻找有无可达值
        for (let node of cache) {
            for (let word of wordSet) {
                if (canTransfer(node.val, word)) {
                    if (word == endWord) is_finish = true; //达到了终点
                    let is_new = true; // is_new 用于判断新到达的点是否在next中
                    for (let n of next) {
                        if (n.val == word) { //新到达的点在next中，在该点的.previous添加一个node
                            is_new = false;
                            n.previous.push(node);
                            break;
                        }
                    }
                    if (is_new) { //新到达的节点不在next中，next添加该节点
                        let new_node = new MakeNode(word, [node]);
                        next.push(new_node);
                    }
                }
            }
        }
        if (is_finish) { //已经到达了终点，在next中找到终点并输出答案
            for (let n of next) {
                if (n.val == endWord) return make_ans(n);
            }
        }
        for (let n of next) { //未到达终点，在wordSet中删除next已经到达的点，避免循环
            wordSet.delete(n.val);
        }
        cache = next; //next 成为下一轮宽搜的cache
    }

    return [];
};

beginWord = 'a';
endWord = 'c';
wordList = ['a','b','c'];
for (let row of findLadders(beginWord, endWord, wordList)) {
    console.log(row);
}