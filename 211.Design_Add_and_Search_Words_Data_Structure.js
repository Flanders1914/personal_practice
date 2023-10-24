/*
211. Design Add and Search Words Data Structure
思路利用字典树trie
这里的字典树实现较为简洁
注意这道题中查询的单词会带有'.'这种省略符号
所以字典树查询需要用宽度优先搜索BFS
*/
var WordDictionary = function() {
    this.root = {"flag" : false};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let current = this.root;
    for (let i = 0; i <= word.length-1; i++) {
        if (current[word[i]]) {
            current = current[word[i]];
        } else {
            current[word[i]] = {"flag" : false};
            current = current[word[i]];
        }
        if (i == word.length-1) current.flag = true;
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let current = [this.root];
    for (let c of word) {
        let next = [];
        let is_end = true;
        for (let node of current) {
            if (node['.']) {
                is_end = false;
                next.push(node['.']);
            }
            if (c == '.') {
                for (let key in node) {
                    if (key !== '.' && key !== 'flag') next.push(node[key]);
                    is_end = false;
                }
            } else {
                if (node[c]) {
                    next.push(node[c]);
                    is_end = false;
                }
            }
        }
        if (is_end) return false;
        current = next;
    }
    for (let item of current) {
        if (item.flag) return true;
    }
    return false;
};