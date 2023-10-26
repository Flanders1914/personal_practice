/**
273. Integer to English Words
思路：小于1000的转化单独写一个函数因为重复使用
分步骤将num进行分解转化
先将转化的words放入数组中
最后将数组连接输出，简化空格的操作
 */
var numberToWords = function(num) {
    let ans = [];
    let dictionary = {1:"One", 2:"Two", 3:"Three", 4:"Four", 5:"Five", 6:"Six", 7:"Seven", 8:"Eight", 9:"Nine", 10:"Ten", 
    11: "Eleven", 12:"Twelve", 13:"Thirteen", 14:"Fourteen", 15:"Fifteen", 16:"Sixteen", 17:"Seventeen", 18:"Eighteen", 19:"Nineteen",
    20:"Twenty", 30:"Thirty", 40:"Forty", 50:"Fifty", 60:"Sixty", 70:"Seventy", 80:"Eighty", 90:"Ninety"};
    if (num == 0) return "Zero";
    if (num >= 1000000000) 
    {
        let tempo  = Math.floor(num/1000000000);
        ans.push(dictionary[tempo]);
        ans.push("Billion");
        num = num % 1000000000
    }

    let toWords = function(num) {
        let ans = [];
        if (num >= 100) {
            let tempo = Math.floor(num/100);
            ans.push(dictionary[tempo]);
            ans.push("Hundred");
            num = num % 100;
        }
        if (num >= 20) {
            let tempo = Math.floor(num/10)*10;
           ans.push(dictionary[tempo]);
           num = num % 10;
           if (num != 0) {
            ans.push(dictionary[num]);
           } 
        } else if (num != 0) {
            ans.push(dictionary[num]);
        }
        return ans;
    }

    if (num >= 1000000) {
        let tempo = Math.floor(num/1000000);
        ans.push(...toWords(tempo));
        ans.push("Million");
        num = num % 1000000;
    }
    if (num >= 1000) {
        let tempo = Math.floor(num/1000);
        ans.push(...toWords(tempo));
        ans.push("Thousand");
        num = num % 1000;
    }
    if (num == 0) return ans.join(' ');
    else {
        ans.push(...toWords(num));
        return ans.join(' ');
    }
};
console.log(numberToWords(1234567));