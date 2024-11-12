// flag == true max-heap
let max_map = new Map()
let min_map = new Map()
let max_heap = [[0,0]]
let min_heap = [[0,0]]

function solve(nums) {
    let remains = new Map()
    for (let num of nums) {
        let temp = remains.get(num)
        if (temp === undefined) {
            remains.set(num, 1)
        } else {
            remains.set(num, temp+1)
        }
    }

    let l = 0
    let r = 0
    heap_update(max_heap, nums[0], true, 1)
    heap_update(min_heap, nums[0], false, 1)
    remains.set(nums[0], remains.get(nums[0])-1)

    let res = 1

    while (l <= r && r < nums.length) {
        r++
        let right = nums[r]
        heap_update(max_heap, right, true, 1)
        heap_update(min_heap, right, false, 1)
        remains.set(right, remains.get(right)-1)
        let max = max_heap[1]
        let min = min_heap[1]
        let min_remain = remains.get(min[0])
        if (min[1] + min_remain < max[1]) {
            while (l < r && (min[1] + min_remain < max[1])) {
                l++
                let left = nums[l]
                heap_update(max_heap, left, true, -1)
                heap_update(min_heap, left, false, -1)
                max = max_heap[1]
                min = min_heap[1]
                min_remain = remains.get(min[0])
            }
        }
        if (min[1] == max[1]) {
            res = Math.max(res, r-l+1)
        }
    }

    return res
}

function swap(heap, i, j, flag) {
    let item_i = heap[i]
    let item_j = heap[j]
    if (flag) {
        max_map.set(item_i[0], j)
        max_map.set(item_j[0], i)
    } else {
        min_map.set(item_i[0], j)
        min_map.set(item_j[0], i)
    }

    heap[j] = item_i
    heap[i] = item_j
}

function heapfy_up(heap, index, flag) {
    if (index == 1) return
    let root = index >> 1
    if ((heap[root][1] < heap[index][1]) == flag) {
        swap(heap, index, root, flag)
        heapfy_up(heap, root, flag)
    }
}

function heapfy_down(heap, index, flag) {
    let left = index << 1
    let right = index << 1
    let temp = index
    if (left < heap.length && (heap[temp][1] < heap[left][1]) == flag) {
        temp = left
    }
    if (right < heap.length && (heap[temp][1] < heap[right][1]) == flag) {
        temp = right
    }

    if (temp != index) {
        swap(heap, temp, index, flag)
        heapfy_down(heap, temp, flag)
    }
}

function heap_update(heap, num, flag, offset) {
    let item = heap_get(num, flag)
    if (item == null) {
        item = [num, 1]
    } else {
        item[1] += offset
    }
    if (item[1] == 0) return
    heap.push(item)
    if (flag) {
        max_map.set(item[0], heap.length-1)
    } else {
        min_map.set(item[0], heap.length-1)
    }
    heapfy_up(heap, heap.length-1, flag)
}

function heap_get(num, flag) {
    if (flag) {
        let index = max_map.get(num)
        if (index === undefined) return null
        swap(max_heap, index, max_heap.length-1, flag)
        let target = max_heap.pop()
        heapfy_down(max_heap, index, true)
        return target
    } else {
        let index = min_map.get(num)
        if (index === undefined) return null
        swap(min_heap, index, min_heap.length-1, flag)
        let target = min_heap.pop()
        heapfy_down(min_heap, index, true)
        return target
    }
}

console.log(solve( [1, 2, 2, 1, 3, 3, 3]))