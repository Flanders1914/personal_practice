/**
229. Majority Element II
思路：Moore Voting Algorithm
Boyer-Moore Majority Voting Algorithm
一般情况下 Boyer-Moore Majority Voting Algorithm 寻找 数量 > n//2的元素
但是 可以 generalize 到 寻找 > n//k 的元素
1. Initialization: Start by creating an array with k-1 slots, each storing a pair of values 
(element, count) to represent potential candidates and their counts.
 Additionally, keep two variables, count_others and count_cleared, both initially set to 0.

2. Scanning the Array: Traverse through the array, and for each element, follow these steps:

If the element already exists in one of the k-1 slots, increment its count.
If there’s an empty slot in the array, insert the current element as a new candidate with a count of 1.
If neither of the above conditions applies, decrease the count of all candidates by 1.

3. Verification: After this step, you’ll have k-1 candidates along with their counts.
 To identify the elements occurring more than n/k times, iterate through the array once more. 
 For each candidate, check if its actual count is greater than n/k. 
 Additionally, keep track of elements cleared from the candidates during the scanning step using the count_cleared variable.
 */
var majorityElement = function(nums) {
    let count1 = 1, count2 = 1;
    let candidate1, candidate2;
    for (let num of nums) {
        if (candidate1 == null) candidate1 = num;
        else if (num == candidate1) count1++;
        else if (candidate2 == null) candidate2 = num;
        else if (num == candidate2) count2++;
        else if (count1 == 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 == 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    let ans = [];
    count1 = 0, count2 = 0;
    for (let num of nums) {
        if (num ==  candidate1) count1 += 2;
        else count1--;
        if (num ==  candidate2) count2 += 2;
        else count2--;
    }

    if (count1 > 0) ans.push(candidate1);
    if (count2 > 0) ans.push(candidate2);
    return ans;
};
console.log(majorityElement([4,5,3,4,4,1,0,-1,-2,4,6,7,8,4]));