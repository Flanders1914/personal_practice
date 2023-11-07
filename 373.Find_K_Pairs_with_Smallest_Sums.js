/**
373. Find K Pairs with Smallest Sums
思路：使用一个heap 和 一个set
set存储已经使用的 i-j 避免重复
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let ans = [];
    let heap = [];
    let set = new Set();
    let heapfy_up = function(index) {
        if (index == 0) return;
        let parent = (index -1) >> 1;
        if (heap[index].val < heap[parent].val) {
            let temp = heap[parent];
            heap[parent] = heap[index];
            heap[index] = temp;
            heapfy_up(parent);
        }
    }
    let heapfy_down = function(index) {
        let left = index * 2 +1;
        let right = index * 2 + 2;
        let min = index;
        if (right <= heap.length -1 && heap[right].val < heap[min].val) min = right;
        if (left <= heap.length -1 && heap[left].val < heap[min].val) min = left;
        if (min != index) {
            let temp = heap[index];
            heap[index] = heap[min];
            heap[min] = temp;
            heapfy_down(min);
        }
    };

    let node = {val : nums1[0]+nums2[0], i : 0, j : 0};
    heap.push(node);
    heapfy_up(heap.length-1);
    count = k;
    while ( heap.length > 0 && count > 0) {
        let i = heap[0].i, j = heap[0].j;
        ans.push([nums1[i], nums2[j]]);
        count--;
        let temp = heap.at(-1);
        heap[heap.length-1] = heap[0];
        heap[0] = temp;
        heap.pop();
        if (heap.length > 0) heapfy_down(0);
        if (i <= nums1.length -2 && !set.has(`${i+1}-${j}`)) {
            let node = {val : nums1[i+1]+nums2[j], i : i+1, j : j};
            heap.push(node);
            heapfy_up(heap.length-1);
            set.add(`${i+1}-${j}`);
        }
        if (j <= nums2.length -2 && !set.has(`${i}-${j+1}`)) {
            let node = {val : nums1[i]+nums2[j+1], i : i, j : j+1};
            heap.push(node);
            heapfy_up(heap.length-1);
            set.add(`${i}-${j+1}`);
        }
    }
    return ans;
};
let nums1 = [1,1,2], nums2 = [1,2,3], k = 2;
console.log(kSmallestPairs(nums1, nums2, k));