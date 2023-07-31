/*
39. Combination Sum
思路：利用递归生成值的组合
注意：
1. js中的arr.push()好像不能嵌套使用，因为.push()返回的是0/1而非添加元素后的数组
2. 传递的变量有点多，但都是必要的
3. 需要传递当前添加值在candidates中的index，以避免重复
4. 虽然给的样例是排了序的candidates但是实际上的test case 是不排序的
 */

function findCombination(candidates, index, target, last, ans) {

    let current, candidate;

    for ( let i = index; i <= candidates.length -1; i++) {
        current = last.slice();
        candidate = candidates[i];

        if (candidate > target) {
            return;
        } else if (candidate == target) {
            current.push(candidate);
            ans.push(current);
            return;
        }
        else {
            current.push(candidate);
            findCombination(candidates, i, target - candidate, current, ans);
        }
    }

}

var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let ans = [];
    findCombination(candidates, 0, target, [], ans);
    return ans;
};

let answer = combinationSum([1,3,5,7,11], 20);
for( set of answer) console.log(set);