
var RandomizedCollection = function() {
    this.hash = new Map();
    this.memo = [];
};

/** 
381. Insert Delete GetRandom O(1) - Duplicates allowed
思路：由于有重复的val，所以 hash 是val 到 相应坐标集合的映射
this.memo数组的存在同样是为了方便随机取数
每一次删除和插入需要对涉及到的hash表 和 val对应的set都进行修改
注意删除的数的坐标是数组最后一个的情况，在一些边缘条件下若不进行特殊处理会出错
比如 insert 1 delete 1 由于1的hash和set先被清空了 但memo没有，所以取hash(memo[-1])会得到undefined
 */
RandomizedCollection.prototype.insert = function(val) {
    if (this.hash.has(val)) { // 存在重复的值使用set存储不同的坐标
        let set = this.hash.get(val);
        this.memo.push(val);
        set.add(this.memo.length-1);
        return false;
    } else {
        let set = new Set(); 
        this.memo.push(val);
        set.add(this.memo.length-1);
        this.hash.set(val, set);
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if (this.hash.has(val)) {
        let set = this.hash.get(val); // 先取出val对应的坐标集合
        let [index] = set; // 取出第一个坐标作为删除的元素的坐标
        set.delete(index); // val对应的坐标集合删除该坐标
        if (!set.size) this.hash.delete(val);
        if (index == this.memo.length-1) { // 如果需要删除的元素是最后一个，那么直接pop()即可
            this.memo.pop();
            return true;
        }
        set = this.hash.get(this.memo.at(-1));
        set.delete(this.memo.length-1); // 更新memo数组最后一个元素对应的坐标至 index 然后将其放入index处
        set.add(index);
        this.memo[index] = this.memo.at(-1);
        this.memo.pop();
        return true;
    } else return false;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    let index = Math.floor(Math.random()*this.memo.length);
    return this.memo[index];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */