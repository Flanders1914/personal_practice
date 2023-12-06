/**
649. Dota2 Senate
思路：每轮投票的最佳思路是每个senator 驱逐最近的下一个敌对senator
所以思路是用数组模拟循环链表进行投票
 */
var predictPartyVictory = function(senate) {
    let isBan = new Array(senate.length).fill(false);
    let count1 = 0, count2 = 0;
    for (let senator of senate) {
        if (senator == "R") count1++;
        else count2++;
    }

    let n1 = 0;
    let n2 = 0;
    let i = 0;
    while (count1 && count2) {
        if (!isBan[i]) {
            if (senate[i] == "R") {
                if (n2) {
                    isBan[i] = true;
                    count1--;
                    n2--;
                } else {
                    n1++;
                }
            } else {
                if (n1) {
                    isBan[i] = true;
                    count2--;
                    n1--;
                } else {
                    n2++;
                }
            }
        }
        i = (i+1) % senate.length;
    }

    if (count1 > 0) return "Radiant";
    else return "Dire";
};
console.log(predictPartyVictory("RDD"));