/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

function compare(a, b, arr) {
    let temp1 = arr[a[0]]*arr[b[1]];
    let temp2 = arr[b[0]]*arr[a[1]];
    if (temp1 >= temp2) {
        return true;
    } else {
        return false;
    }
}

function heapfy_up(heap, index, arr) {
    let root = index >> 1;
    if (root == 0) return;
    if (compare(heap[root], heap[index], arr)) {
        let temp = heap[root];
        heap[root] = heap[index];
        heap[index] = temp;
        heapfy_up(heap, root, arr);
    }
}

function heapfy_down(heap, index, arr) {
    let left = index << 1;
    let right = (index << 1) +1;
    let min = index;
    if (left < heap.length && compare(heap[min], heap[left], arr)) {
        min = left;
    }
    if (right < heap.length && compare(heap[min], heap[right], arr)) {
        min = right;
    }

    if (min != index) {
        let temp = heap[index];
        heap[index] = heap[min];
        heap[min] = temp;
        heapfy_down(heap, min, arr);
    }
}

function heap_pop(heap, arr) {
    let res = heap[1];
    heap[1] = heap[heap.length-1];
    heap.pop();
    heapfy_down(heap, 1, arr);
    return res;
}

var kthSmallestPrimeFraction = function(arr, k) {
    let heap = [[],];
    let hashSet = new Set();
    heap.push([0, arr.length-1]);
    hashSet.add(`${0}-${arr.length-1}`);

    while (k != 1) {
        k--;
        let current = heap_pop(heap, arr);
        let a = current[0];
        let b = current[1];
        if (!hashSet.has(`${a+1}-${b}`)) {
            hashSet.add(`${a+1}-${b}`);
            heap.push([a+1, b]);
            heapfy_up(heap, heap.length-1, arr);
        }
        if (!hashSet.has(`${a}-${b-1}`)) {
            hashSet.add(`${a}-${b-1}`);
            heap.push([a, b-1]);
            heapfy_up(heap, heap.length-1, arr);
        }
    }
    return [arr[heap[1][0]], arr[heap[1][1]]];
};

let arr = [1,2,3,5], k = 3;
for (let n of kthSmallestPrimeFraction(arr, k)) {
    console.log(n);
}