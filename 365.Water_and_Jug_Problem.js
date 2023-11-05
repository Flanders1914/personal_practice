/**
365. Water and Jug Problem
思路：先生成包含所有可达水量的集合(由于存在target > jug 这种情况 target = target - jug)
再判断是否可以解决该问题
所有可获得的水量为两个杯子不断做差然后拿剩余水继续做差得到的的值
下面的算法可以优化
另外一种做法是利用最大公因数
 */
var canMeasureWater = function(jug1Capacity, jug2Capacity, targetCapacity) {
    let set = new Set();
    let make = function(n) {
        n = Math.abs(jug1Capacity - n);
        let m = Math.abs(jug2Capacity - n);
        if (!set.has(n)) {
            set.add(n);
            make(n);
        }
        if (!set.has(m)) {
            set.add(m);
            make(m);
        }
    }
    set.add(Math.abs(jug1Capacity-jug2Capacity));
    make(Math.abs(jug1Capacity-jug2Capacity));
    if (targetCapacity > jug1Capacity + jug2Capacity) return false;
    if (targetCapacity == jug1Capacity + jug2Capacity) return true;
    if (set.has(Math.abs(targetCapacity - jug1Capacity)) || 
    set.has(Math.abs(targetCapacity - jug2Capacity))) return true;
    else return false;
};
console.log(canMeasureWater(13, 11, 1));