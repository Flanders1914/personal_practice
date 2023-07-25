
var twoSum = function(nums, target) {
    hash_table = {};

    for (let i = 0; i < nums.length; i++){
        hash_table[nums[i]] = i;
    }
    
    for (let i = 0; i < nums.length; i++){
        if ((hash_table[target - nums[i]] !== undefined) 
        && (hash_table[target - nums[i]] !== i)) {
            return [i, hash_table[target - nums[i]]];
            break;
        }        
    }
};

console.log(twoSum([2,7,11,15], 9));