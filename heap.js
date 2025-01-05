let heapfy_up = function(heap, index, flag) { // flag == 1 min heap, flag == 0 max heap
    if (index == 1) return
    let root = index >> 1
    if ((heap[root] < heap[index]) ^ flag) {
        heap_swap(heap, root, index)
        heapfy_up(heap, root, flag)
    }
}


let heapfy_down = function(heap, index, flag) {
    let left = index << 1
    let right = left +1
    let temp = index
    if (left < heap.length && ((heap[temp] < heap[left]) ^ flag)) {
        temp = left
    }
    if (right < heap.length && ((heap[temp] < heap[right]) ^ flag)) {
        temp = right
    }

    if (temp != index) {
        heap_swap(heap, index, temp)
        heapfy_down(heap, temp, flag)
    }
}


let heap_pop = function(heap, flag) {
    heap_swap(heap, 1, heap.length-1)
    let res = heap.pop()
    heapfy_down(heap, 1, flag)
    return res
}


let heap_insert = function(heap, val, flag) {
    heap.push(val)
    heapfy_up(heap, heap.length-1, flag)
}


let heap_swap = function(heap, i, j) {
    [heap[i], heap[j]] = [heap[j], heap[i]]
}


let init_heap = function (arr, flag) {
    let heap = [0]
    heap.push(...arr)
    for (let i = (heap.length-1) >> 1; i >= 1; i--) {
        heapfy_down(heap, i, flag)
    }
    return heap
}

// test
function test() {

    let arr = []
    for (let i = 0; i < 20; i ++) {
        arr.push(Math.floor(100*Math.random()))
    }

    let min_heap = init_heap(arr, true)
    let max_heap = init_heap(arr, false)
    heap_insert(min_heap, -1, 1)
    heap_insert(max_heap, 101, 0)

    for (let i = 0; i < 10; i++) {
        let rand = Math.floor(200*Math.random()) - 50
        heap_insert(min_heap, rand, 1)
        heap_insert(max_heap, rand, 0)
    }

    let res = []
    while (min_heap.length > 1) {
        res.push(heap_pop(min_heap, 1))
    }

    console.log(res)
    for (let i = 1; i < res.length; i++) {
        if (res[i] < res[i-1]) {
            console.log("min heap error at i = " + i)
            return false
        }
    }
    console.log("__________________________")


    res = []
    while (max_heap.length > 1) {
        res.push(heap_pop(max_heap, 0))
    }

    console.log(res)
    for (let i = 1; i < res.length; i++) {
        if (res[i] > res[i-1]) {
            console.log("max heap error at i = " + i)
            return false
        }
    }

    return true
}

for (let count = 1; count <= 3000; count ++) {
    if (test()) {
        console.log("test sucess No." + count)
        continue
    } else {
        break
    }
}