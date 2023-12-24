/**
519. Random Flip Matrix
思路：improved 的 Fisher–Yates shuffle algorithm
Fisher–Yates shuffle algorithm思路：
将一个有序数组 打乱成无序
设 数组从1...m为打乱前，m+1...n 为打乱后
我们在1...中随机抽取一个元素并将其与m交换，打乱前的序列长度减一，打乱后的序列长度加一

我们有个二维数组，将其转化为一维m*n长度的一维数组
其中元素在一维数组中的坐标 index 
对应在二维数组中的坐标为
x = (index)// n
y = index % n;

这道题虽然必须要m*n的空间复杂度，但我们不能给每个元素赋值，否则会爆空间
我们只给未赋值的选定的坐标，以及在打乱序列边缘的坐标进行赋值，并进行交换
 */
var Solution = function(m, n) {
    this.n = n;
    this.m = m;
    this.size = m*n;
    this.arr = new Array(this.size);
    this.pointer = this.size;
    this.reset();
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
    if (this.pointer == 0) return [];
    let index = Math.floor(Math.random()*this.pointer);
    this.pointer--;
    if (this.arr[this.pointer] === undefined) this.arr[this.pointer] = this.pointer;
    if (this.arr[index] === undefined) {
        this.arr[index] = index;
    }
    let target = this.arr[index];
    let x = Math.floor((target)/this.n);
    let y = target % this.n;
    [this.arr[this.pointer], this.arr[index]] = [this.arr[index], this.arr[this.pointer]];
    return [x,y];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
    this.pointer = this.size;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
var obj = new Solution(2,2);
console.log(obj.flip());