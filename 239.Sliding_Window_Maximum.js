/*
239. Sliding Window Maximum
这里利用了一个堆，注意堆储存的是包含val和index两个属性的对象
在memo中储存对象的引用，通过memo的坐标定位需要删除的元素，再通过index属性
找到该对象在堆中的坐标
memo如果使用链表实现可以模拟sliding window 减小空间复杂度
时间复杂度 O(nlog(k))

用双指针法和双向队列应该更简单，时间复杂度能够到O(n)
*/

const heapfyUp = function(heap, index) {
    if (index == 0) return;
    let parent = Math.floor(index/2);
    if (heap[parent].val < heap[index].val) {
        swap(heap, parent, index);
        heapfyUp(heap, parent);
    }
    return;
};
const heapfyDown = function(heap, index) {
    let left_child = index*2;
    let right_child = left_child+1;
    let max = index;
    if (left_child <= heap.length-1 && heap[left_child].val > heap[max].val) {
        max = left_child;
    }
    if (right_child <= heap.length-1 && heap[right_child].val > heap[max].val) {
        max = right_child;
    }
    if (max != index) {
        swap(heap, max, index);
        heapfyDown(heap, max);
    }
};

const swap = function(heap, i, j) {
    let tempo = heap[i];
    heap[i] = heap[j];
    heap[j] = tempo;
    tempo = heap[i].index;
    heap[i].index = heap[j].index;
    heap[j].index = tempo;
};

var maxSlidingWindow = function(nums, k) {
    const heap = [];
    const memo = [];
    for (let i = 0; i <= k-1; i++) {
        let node = {val : nums[i], index : i}
        heap.push(node);
        memo.push(node);
    }
    // heapfy
    for (let i = Math.floor(k/2); i >= 0; i--) {
        heapfyDown(heap, i);
    }

    let ans = [heap[0].val];
    for (let i = k; i <= nums.length-1; i++) {
        // delete first node
        let delete_index = memo[i-k].index;
        if (delete_index == k-1) heap.pop();
        else {
            swap(heap, delete_index, k-1);
            heap.pop();
            let parent = Math.floor(delete_index/2);
            if (heap[parent].val >= heap[delete_index].val) heapfyDown(heap, delete_index);
            else heapfyUp(heap, delete_index); //注意 在 delete_index == parent == 0 时 必须heapfyDown
        }
        // insert next node
        let node = {val : nums[i], index : k-1};
        heap.push(node);
        heapfyUp(heap, k-1);
        memo.push(node);
        ans.push(heap[0].val);
    }
    return ans;
};
let nums = [1,3,1,2,0,5], k = 3;
console.log(maxSlidingWindow(nums,k));