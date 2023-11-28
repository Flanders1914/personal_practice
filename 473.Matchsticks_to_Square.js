/**
473. Matchsticks to Square
思路: bitmask
我们将题目分解成两步，第一步将所有的match分成长度相等的两部分，第二步，对这两部分在进行长度相等的分割
若能成功进行这两次分割，表示可以构成square
这样我们就能减少相同分割状态但分配的边不同造成的重复
state为一个matchsticks.length 长的二进制数
0代表可选，1代表备选，我们所作的每一步就是将0反转成1，直到选择的边长和==剩余未选择的边长和
优化思路：
1.对matchsticks排序，避免在相同状态多次选择等长的边
2.主程序的mask，dividing中的m的全部位是1，state对应的结果 == m^state的结果，相当于选择的和未选择的翻转一下
 */
function dividing(state, target, matchsticks, m) { // dividing 函数用于将match分为等长两部分，并返回所有可能的解的state
    let hash =  new Map();
    let states = []; // 储存所有可能分割解的state
    let divide = function(state, pre) {
        if (hash.has(state)) return hash.get(state);
        if (pre > target) {
            hash.set(state, false);
            hash.set(state^m, false) // 反转的state其结果也相同
            return false;
        } else if (pre == target) {
            if (!hash.has(state)) {
                hash.set(state, true);
                hash.set(state^m, true);
                states.push(state);
            }
            return true;
        }
        let mask = 1;
        let is_true = false;
        let last = -1; // last标记上一个选择的match长度，用于避免相同状态选择相同长度的match
        for (let i = 0; i <= matchsticks.length-1; i++) {
            if (!(state & mask)) {
                if (last != matchsticks[i] && divide(state|mask, pre + matchsticks[i])) {
                    is_true = true;
                }
                last = matchsticks[i];
            }
            mask <<= 1;
        }
        if (is_true) {
            hash.set(state, true);
            hash.set(state^m, true);  
            return true;
        } else {
            hash.set(state, false);
            hash.set(state^m, false);
            return false;
        }
    };
    if (divide(state, 0)) return states;
    else return false;
}

var makesquare = function(matchsticks) {
    let total = 0;
    for (let match of matchsticks) total += match;
    matchsticks.sort((a,b) => a-b);
    if (total % 4) return false;
    let mask = 1;
    for (let i = 1; i <= matchsticks.length-1; i++) {
        mask <<= 1;
        mask |= 1;
    }

    let target = total/2; 
    let states = dividing(0, target, matchsticks, mask); //第一步将match分成两部分
    if (!states) return false;
    target /= 2;
    for (let state of states) { // 第二遍针对分割成的两部分，进行第二次分割
        if (dividing(state, target, matchsticks, mask) && 
        dividing(state^mask, target, matchsticks, mask)) return true;
    }
    return false;
};
console.log(makesquare([3,3,3,3,4]));