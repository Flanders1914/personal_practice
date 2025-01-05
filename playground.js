function solution(stockPrice) {
    let min = Number.MAX_VALUE
    let res = -1

    let sum = 0
    for (let item of stockPrice) {
        sum += item
    }

    let pre = 0
    for (let i = 0; i < stockPrice.length-1; i++) {
        pre += stockPrice[i]
        let remain = sum - pre
        let temp =  Math.abs(Math.floor(pre / (i+1)) - Math.floor(remain / (stockPrice.length-i-1)))
        if (temp < min) {
            min = temp
            res = i+1
        }
    }
    return res
}

let stockPrice = [1, 3, 2, 3]
console.log(solution(stockPrice))