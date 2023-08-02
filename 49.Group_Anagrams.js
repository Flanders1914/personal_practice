/*
49. Group Anagrams
思路：
1. 把每一个字符串转化为字符数组，按字典顺序排序，然后生成排序后的字符串
2. 以排序后的字符串为hash值，利用hash表，把字符串归类即可

注意：
1. JS sort(func) 函数内的func不返回true/false，而是返回正数/复数
2. ！需要放在()外
3. 两种方法把字符串转化为数组 ：Array.from() 和 .split('') 推荐前者(可以处理代理对)
*/

var groupAnagrams = function(strs) {
    let hash = new Map();
    let ans = [];
    let k = -1;

    for (let str of strs) {
        let str_arr = Array.from(str);

        str_arr.sort((a,b) => {
            if (a > b) return 1;
            else return -1;
        });

        let processed_str = str_arr.join('');

        if (hash.has(processed_str)) {
            let index = hash.get(processed_str);
            if (!(str in ans[index])) ans[index].push(str); //!需要放在()外
        } else {
            k++;
            ans.push([str]);
            hash.set(processed_str, k);
        }
    }

    return ans;
};

let ans = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
for (let item of ans) {
    console.log(item);
}
