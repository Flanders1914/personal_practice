/*
40. Combination Sum II
思路：
39.Combination Sum的改版
通过index + 1 避免选相同的值

注意：
candidates 中的元素并非unique
所以在循环中需要跳过值相同的元素
*/

function findCombination(candidates, target, index, last, ans) {

    let current;

    for (let i = index; i<= candidates.length -1; i++) {

        current = last.slice();
        if (i != index && candidates[i] == candidates[i -1]) continue;

        if (candidates[i] > target) return;
        else if (candidates[i] == target) {
            current.push(candidates[i]);
            ans.push(current);
        } else {
            current.push(candidates[i]);
            findCombination(candidates, target - candidates[i], i + 1, current, ans);
        }

    }

    return;
}

var combinationSum2 = function(candidates, target) {
    candidates.sort( (a, b)=> a - b );
    let ans = [];
    findCombination(candidates, target, 0, [], ans);
    return ans;
};

let answer = combinationSum2([10,1,2,7,6,1,5], 8);
for( set of answer) console.log(set);