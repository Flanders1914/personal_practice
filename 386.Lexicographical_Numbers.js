/**
386. Lexicographical Numbers
方法：work 函数 按字典顺序递归生成之前的digits是pre的数
从首digit 1-9 开始 生成ans 若生成的数比n大则放弃该数 
 */
var lexicalOrder = function(n) {
    let ans = [];
    let make = function(pre) {
        let next = pre*10;
        if (next > n) return;
        for (let i = 0; i <= 9; i++) {
            if (next + i > n) return;
            ans.push(next + i);
            make(next+i);
        }
        return;
    }
    for (let i = 1; i <= 9; i++) {
        if (i <= n) {
            ans.push(i);
            make(i);
        } else break;
    }
    return ans;
};
console.log(lexicalOrder(2));