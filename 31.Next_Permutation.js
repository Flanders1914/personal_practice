/*
31. Next Permutation
思路：更像是数学题目 ：对于每个元素，可能的修改方式就是用该元素右侧刚刚好比它大的元素来代替它。
为了刚刚好大一点，只要修改最右侧的可修改元素即可。

1. 用nums_copy 储存排序后的nums
2. 按顺序将nums储存到hash table 中
3. 原nums数组所有元素从左到右进行一次遍历，对于某一个元素遍历哈希表
寻找可用的刚好比该元素大的哈希值；如果有，记录到record末尾，为潜在的修改选项
在进行下一次迭代前把当前元素的可用数量减一
4. 如果record无记录，输出nums_copy
5. 如果有记录，用record数组末尾的记录进行修改， 
6. 修改的方式：原元素和比它刚刚大的它右侧的元素交换，它右侧的数组重新升序排序。

速度击败了99%
 */
var nextPermutation = function(nums) {
    let nums_copy = [];
    nums.forEach((value) => nums_copy.push(value));
    nums_copy.sort((a, b) => a - b );
    let hash_table = new Map([[nums_copy[0], 1]]); //注意有双重[]

    for (let i = 1; i <= nums_copy.length -1; i++) { //初始化hash table
        if (nums_copy[i] == nums_copy[i -1]) 
        hash_table.set(nums_copy[i], hash_table.get(nums_copy[i]) +1);
        else hash_table.set(nums_copy[i], 1);
    }

    let record = [];
    for (let i = 0; i <= nums.length -1; i++) {
        for (let key of hash_table.keys()) {
            if (+key > nums[i] && hash_table.get(key) > 0) {
                record.push([i, key]);
                break;
            } else if (+key == nums[i]) hash_table.set(key, hash_table.get(key) -1);
        }  
    }

    if (record.length == 0) {
        for (i = 0 ; i < nums.length; i++) nums[i] = nums_copy[i];
        return;
    }


    // 开始修改nums
    let index = record.at(-1)[0];
    let k = nums[index];

    nums[index] = record.at(-1)[1];
    for (i= index +1; i <= nums.length -1; i++) {
        if (nums[i] == nums[index]) {
            nums[i] = k;
            let right_part = nums.slice(index +1);
            right_part.sort((a, b) => a-b);
            for (j = index +1; j <= nums.length -1; j++) nums[j] = right_part[j - index -1];
            return;
        }
    }
};

let nums = [1,3,2];
nextPermutation(nums);
console.log(nums);