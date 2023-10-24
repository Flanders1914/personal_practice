/**
212. Word Search II
字典树、hash表与DFS的结合
思路：
1. initialize函数返回words组成的字典树，每个节点带有两个额外的属性：end表示是否为单词结尾，
flag表示是否在矩阵中可达
2. search函数来标记trie中在矩阵内可达的节点，从trie头部各节点在矩阵中的对应位置出发，DFS
由于不能走重复的位置所以需要用hash表记录走过的位置
3. 最后对trie树进行遍历寻找出所有满足条件，即在矩阵内可达（所有单词的flag均为true）的词语
只需在矩阵可达的范围内（flag == true）遍历即可
 */
var findWords = function(board, words) {
    let initialize = function(words) {
        let root = {"flag" : true};
        for (let word of words) {
            let current = root;
            for (let c of word) {
                if (current[c]) current = current[c];
                else {
                    current[c] = {"end" : false, "flag" : false};
                    current = current[c];
                }
            }
            current.end = true;
        }
        return root;
    };
    let search = function(root, i, j, board, hash) {
        if (i >= 1 && root[board[i-1][j]] && hash[i-1][j]) {
            hash[i-1][j] = false;
            root[board[i-1][j]].flag = true;
            search(root[board[i-1][j]], i-1, j, board, hash);
            hash[i-1][j] = true;
        }
        if (i <= board.length-2 && root[board[i+1][j]] && hash[i+1][j]) {
            hash[i+1][j] = false;
            root[board[i+1][j]].flag = true;
            search(root[board[i+1][j]], i+1, j, board, hash);
            hash[i+1][j] = true;
        }
        if (j >= 1 && root[board[i][j-1]] && hash[i][j-1]) {
            hash[i][j-1] = false;
            root[board[i][j-1]].flag = true;
            search(root[board[i][j-1]], i, j-1, board, hash);
            hash[i][j-1] = true;
        }
        if (j <= board[0].length-2 && root[board[i][j+1]] && hash[i][j+1]) {
            hash[i][j+1] = false;
            root[board[i][j+1]].flag = true;
            search(root[board[i][j+1]], i, j+1, board, hash);
            hash[i][j+1] = true;
        }
    };


    let trie = initialize(words);
    let hash = new Array(board.length).fill().map(()=> new Array(board[0].length).fill(true));
    for (let i = 0; i <= board.length-1; i++) {
        for (let j = 0; j <= board[0].length-1; j++) {
            if (trie[board[i][j]]) {
                trie[board[i][j]].flag = true;
                hash[i][j] = false;
                search(trie[board[i][j]], i, j, board, hash);
                for (let n = 0; n <= hash.length-1; n++) {
                    for (let m = 0; m <= hash[0].length-1; m++) hash[n][m] = true;
                }
            }
        }
    }

    let ans = [];
    let find_ans = function(root, previous){
        if (root.flag) {
            if (root.end) {
                ans.push(previous.join(""));
            }
            for (let key in root) {
                if (key !== "flag" && key !== "end") {
                    previous.push(key);
                    find_ans(root[key], previous);
                    previous.pop();
                }
            }
        }
    };

    find_ans(trie, []);
    return ans;
};

let board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
let words = ["oath","pea","eat","rain","hklf", "hf"];
console.log(findWords(board,words));