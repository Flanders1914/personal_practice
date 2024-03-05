/**
472. Concatenated Words
思路：tire + 优化dfs（dp)
dfs思路：
在tire中若当前节点 flag == true
有两种选择：
1. 回到起点 （一个新word）
2. 在当前路径上继续往下（还是同一个word）
 */
class Tire {
   constructor() {
      this.flag = false;
      this.next = new Map();
   }
}

function tire_add(s, root) {
   for (let c of s) {
      if (root.next.has(c)) root = root.next.get(c);
      else {
         let new_node = new Tire();
         root.next.set(c, new_node);
         root = new_node;
      }
   }
   root.flag = true;
}

function search(s, root) {
   let set = new Set();

   function work(index, current) {
      if (current.next.has(s[index])) {
         current = current.next.get(s[index]);
         if (index == s.length-1) {
            if (current.flag) return true;
            else return false;
         }
         if (current.flag) {
            if (!set.has(index+1)) {
               if (work(index+1, root)) return true;
               else {
                  set.add(index+1);
               }
            }
            return work(index+1, current);
         } else {
            return work(index+1, current);
         }
      } else return false;
   }

   return work(0, root);
}

var findAllConcatenatedWordsInADict = function(words) {

   words.sort((a,b) => a.length - b.length);
   let root = new Tire();
   let min_len = words[0].length;
   let index = 0;
   let res = [];

   while ((index < words.length) && (words[index].length < min_len*2)) {
      tire_add(words[index], root);
      index++;
   }

   for (let i = index; i < words.length; i++) {
      if (search(words[i], root)) {
         res.push(words[i]);
      } else {
         tire_add(words[i], root);
      }
   }

   return res;
};