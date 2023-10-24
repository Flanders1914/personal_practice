/**
 * 208. Implement Trie (Prefix Tree)
字典树
字典树是将词语相同的前缀做根节点，不同的字母做叶节点
在单词的结尾将flag标上true
这里的实现复杂了，其实不必使用单独的map存储根到叶的映射
直接将叶节点用对象的属性连接即可
见211. Design Add and Search Words Data Structure
*/
function Node() {
    this.c = '';
    this.next =  new Map();
    this.flag = false;
   }
   
   var Trie = function() {
       this.root = new Node();
   };
   
   /** 
    * @param {string} word
    * @return {void}
    */
   Trie.prototype.insert = function(word) {
       let current = this.root;
       for (let i=0; i <= word.length-1; i++) {
           if (current.next.has(word[i])) {
               current = current.next.get(word[i]);
               if (i == word.length-1) current.flag = true;
               continue;
           } else {
               let next = new Node();
               next.c = word[i];
               if (i == word.length-1) next.flag = true;
               current.next.set(word[i], next);
               current = next;
           }
       }
   };
   
   /** 
    * @param {string} word
    * @return {boolean}
    */
   Trie.prototype.search = function(word) {
       let current = this.root;
       for (let i = 0; i <= word.length-1; i++) {
           if (current.next.has(word[i])) {
               current = current.next.get(word[i]);
               continue;
           } else {
               return false;
           }
       }
       if (current.flag) return true;
       else return false;
   };
   
   /** 
    * @param {string} prefix
    * @return {boolean}
    */
   Trie.prototype.startsWith = function(prefix) {
       let current = this.root;
       for (let i = 0; i <= prefix.length-1; i++) {
           if (current.next.has(prefix[i])) {
               current = current.next.get(prefix[i]);
               continue;
           } else {
               return false;
           }
       }
       return true;
   };