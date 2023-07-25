/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ans = 0;
    let current_ans = 0;

    for (let i = 0;i < height.length;i++) {
        current_ans = 0;
        for (let j = height.length -1; j > i; j--) {
            
            let area = 0;
            let last_height = 0;

            if (height[i] < height[j]) {

                area = height[i] * (j-i);
                current_ans = (current_ans > area) ? current_ans : area;
                break;

            } else {
                if (last_height < height[j]) {
                    last_height = height[j];
                    area = last_height * (j-i);
                    current_ans = (current_ans > area) ? current_ans : area;
                } 
            }
        }
        ans = (current_ans > ans) ? current_ans : ans;
    }

    return ans;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))