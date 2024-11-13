/**
2070. Most Beautiful Item for Each Query
binary search
 */
var maximumBeauty = function(items, queries) {
    let arr = []
    arr.push([0, 0])

    items.sort((a, b) => {
        if (a[0] == b[0]) return a[1] - b[1]
        else return a[0]-b[0]
    })
    let max = 0
    for (let i = 0; i < items.length; i++) {
        if (i < items.length-1 && items[i][0] == items[i+1][0]) {
            continue
        }
        let [price, val] = items[i]
        if (val > max) max = val
        arr.push([price, max])
    }

    let res = []

    let search = function(price) {
        let l = 0
        let r = arr.length-1

        while (l <= r) {
            let mid = (l+r) >> 1
            if (l == mid) {
                if (arr[r][0] <= price) return arr[r][1]
                else return arr[l][1]
            }
            if (arr[mid][0] > price) {
                r = mid-1
            } else {
                l = mid
            }
        }
    }

    for (let query of queries) {
        res.push(search(query))
    }
    return res
};

let items = [[1,2],[3,2],[2,4],[5,6],[3,5]], queries = [1,2,3,4,5,6]
console.log(maximumBeauty(items, queries))