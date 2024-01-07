/**
1002. Find Common Characters
思路：类似宽度优先搜索
首先将第一个word中所有字母记录在hash表current内
之后每个word都将在当前的current中筛选出next哈希表
然后令current = next
 */
var commonChars = function(words) {
  let current = new Map();
  for (let c of words[0]) {
    if (current.has(c)) current.set(c, current.get(c)+1);
    else current.set(c, 1);
  }

  for (let i = 1; i <= words.length-1; i++) {
    let next = new Map();
    for (let c of words[i]) {
        if (current.get(c) > 0){
            if (next.has(c)) next.set(c, next.get(c)+1);
            else next.set(c, 1);
            current.set(c, current.get(c)-1);
        }
    }
    current = next;
  }

  let res = [];
  for (let item of current.entries()) {
    for (let i = 1; i <= item[1]; i++) res.push(item[0]);
  }
  return res;
};