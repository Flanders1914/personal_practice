/**
406. Queue Reconstruction by Height
思路1：从前方计数为0的剩余元素开始，选择高度最小的那个
然后将剩余元素中高度比其低或相等的元素前方计数-1
利用排序时间复杂度最好为O(n^2)
思路2: 按照如下思路对 people 排序
高度不同按照高度的倒序
高度相同按照左侧计数的正序
然后遍历people（此时的遍历顺序是高度从高向低 相同高度左侧计数从少到多）
将每个people[i]插入在res的第people[i][1]+1 位置上
解析：由于是高度的倒序
所以在某个people[i]插入res之前，res中所有的元素高度都大于等于该people
因此people[i] 在当前res中的位置是 people[i][1]+1
由于之后的元素的高度比该people小，即使相等插入的位置也是在该元素之后
所以该元素在res的相对位置不受之后的元素的影响
 */
/*
var reconstructQueue = function(people) {
    people.sort((a, b) => b[1] - a[1]);
    let res = [];
    let left_index = 0;
    let memo = new Map();
    for (let i = people.length -1; i >= 0; i--) {
        if (people[i][1] && left_index == 0) {
            left_index = i+1;
        }
        memo.set(people[i], people[i][1]);
    }
    while (people.length) {
        let target = people.length-1;
        for (let i = people.length -2; i >= left_index; i--) {
            if (people[target][0] > people[i][0]) target = i;
        }
        res.push(people[target]);
        [people[target], people[people.length-1]] = 
        [people[people.length-1], people[target]];
        people.pop();
        for (let i = left_index-1; i >= 0; i--) {
            if (people[i][0] <= res.at(-1)[0]) {
                people[i][1]--;
            }
            if (people[i][1] == 0) {
                left_index--;
                [people[i], people[left_index]] = 
                [people[left_index], people[i]];
            }
        }
    }
    for (let item of res) item[1] = memo.get(item);
    return res;
};
*/
var reconstructQueue = function(people) {
    let res = [];
    let compare = ([h1, l1], [h2, l2]) => {
        if (h1 != h2) return h2 - h1;
        else return l1 - l2;
    };
    people.sort(compare);
    for (let p of people) {
        res.splice(p[1], 0, p);
    }
    return res;
};
console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));