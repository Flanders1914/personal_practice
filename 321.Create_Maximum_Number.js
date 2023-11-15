/**
321. Create Maximum Number
思路1: 每次从两个数组的可选域中取最大值
思路2：candids[i] 数组表示从 nums1中挑i个， nums2中挑k-i个数组成的最大值，将原题分为两个
主要函数 getMax 在制定数组中挑n个数组成的最大值 merge 将两个数组合并为最大值
难点：遇到相同值的选择
思路1使用了递归导致时间复杂度过高
思路2的处理在merge中为比较下一项的值
若不同数组中的下一个值相同，我们比较各个数组中的下一个，由于所有数都要用
所以较大的下一个值应当在前。(若下一个值不比相同的值大则没有影响，因为两个相同值在先
    若存在某一个下一个值比较大，那么这个值应当在较前的位置，若相同的值为某一个数组的末尾，
    这个值可以放在后面进行比较而不影响结果)
*/
/*
var maxNumber = function(nums1, nums2, k) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    let compare = function(a1, a2) {
        for (let i = 0; i <= a1.length-1; i++) {
            if (a1[i] == a2[i]) continue;
            else if (a1[i] > a2[i]) return true;
            else return false;
        }
        return true; 
    };

    let search = function(n1, n2, k, pre) {
        while (k > 0) {
            let max = -1;
            let maxi = -1;
            let in_which = 1;
            // 在 nums1 中找
            let r = (n2 >= k)? nums1.length-1 : nums1.length-(k-n2);
            for (let i = nums1.length - n1; i <= r; i++) {
                if (nums1[i] > max) {
                    max = nums1[i];
                    maxi = i;
                }
            }
            // 在 nums2 中找
            let has_same = false;
            let same_i = -1;
            r = (n1 >= k)? nums2.length-1 : nums2.length-(k-n1);
            for (let i = nums2.length - n2; i <= r; i++) {
                if (nums2[i] > max) {
                    has_same = false;
                    max = nums2[i];
                    maxi = i;
                    in_which = 2;
                }
                if (nums2[i] == max && in_which == 1) { // 出现相同的数字
                    has_same = true;
                    same_i = i;
                    in_which = 2;
                }
            }
            if (has_same) {
                let pre_temp = pre.slice();
                pre_temp.push(max);
                let a1 = search(nums1.length-(maxi+1), n2, k-1, pre_temp);
                pre_temp = pre.slice();
                pre_temp.push(max);
                let a2 = search(n1, nums2.length-(same_i+1), k-1, pre_temp);
                if (compare(a1, a2)) return a1;
                else return a2;
            } else {
                pre.push(max);
                k--;
                if (in_which == 1) n1 = nums1.length - (maxi+1);
                else n2 = nums2.length - (maxi+1);
            }
        }
        return pre;
    };
    return search(n1, n2, k, []);
};
*/
var maxNumber = function(nums1, nums2, k) {
    let getMax = function(a, n) {
        let res = [];
        let index = 0;
        while (n > 0) {
            let max = -1, maxi = -1;
            for (let i = index; i <= a.length -n; i++) {
                if (max < a[i]) {
                    max = a[i];
                    maxi = i;
                }
            }
            res.push(max);
            index = maxi+1;
            n--;
        }
        return res;
    };

    let merge = function(a1, a2) {
        res = [];
        let i = 0, j = 0;
        while (i <= a1.length-1 && j <= a2.length-1) {
            if (a1[i] > a2[j]) {
                res.push(a1[i]);
                i++;
            } else if (a1[i] < a2[j]){
                res.push(a2[j]);
                j++;
            } else {
                res.push(a1[i]);
                let temp_i = i;
                let temp_j = j;
                while (temp_i <= a1.length-1 && temp_j <= a2.length-1 
                    && a1[temp_i] == a2[temp_j]) {
                    temp_i++;
                    temp_j++;
                }
                if (temp_j == a2.length || 
                (temp_i < a1.length && a1[temp_i] > a2[temp_j])) {
                    i++;
                } else j++;
            }
        }
        while (i <= a1.length-1) {
            res.push(a1[i]);
            i++;
        }
        while (j <= a2.length-1) {
            res.push(a2[j]);
            j++;
        }
        return res;
    };

    let candids = [];
    for (let n1 = 0; n1 <= k; n1++) {
        if (n1 > nums1.length || (k- n1) > nums2.length) continue;
        else {
            let a1 = getMax(nums1, n1);
            let a2 = getMax(nums2, k-n1);
            candids.push(merge(a1, a2));
        }
    }

    let deleted = new Set();
    for (let j = 0; j <= k; j++) {
        let maxi = -1;
        let max = -1;
        for (let i = 0; i <= candids.length-1; i++) {
            if (!deleted.has(i) && candids[i][j] > max) {
                max = candids[i][j];
                maxi = i;
            }
        }
        for (let i = 0; i <= candids.length-1; i++) {
            if (candids[i][j] < max) deleted.add(i);
        }
    }
    for (let i = 0; i <= candids.length-1; i++) {
        if (!deleted.has(i)) return candids[i];
    }
};

let nums1 = [2,5,6,4,4,0], nums2 = [7,3,8,0,6,5,7,6,2], k = 15;
console.log(maxNumber(nums1, nums2, k));