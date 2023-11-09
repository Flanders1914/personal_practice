
var RandomizedSet = function() {
    this.hash = new Map();
    this.memo = [];
};

/** 
380. Insert Delete GetRandom O(1)
思路：memo以数组存储值 方便随机取值
hash保存值与坐标的映射
要添加值则将值放在数组末尾
要删除值则通过hash表找到对应的坐标然后在数组中将该值与数组末尾的值交换
更新后者的坐标最后去除末尾即可
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.hash.has(val)) return false;
    this.memo.push(val);
    this.hash.set(val, this.memo.length-1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.hash.has(val)) {
        let index = this.hash.get(val);
        let temp = this.memo.at(-1);
        this.hash.set(temp, index);
        this.memo[this.memo.length-1] = this.memo[index];
        this.memo[index] = temp;
        this.memo.pop();
        this.hash.delete(val);
        return true;
    } else return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let index = Math.floor(Math.random()*this.memo.length);
    return this.memo[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */