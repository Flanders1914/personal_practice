/**
860. Lemonade Change
思路：贪心
 */
var lemonadeChange = function(bills) {
    changes = [0,0]; // changes[0] : 5 changes[1] : 10 
    for (let bill of bills) {
        if (bill == 5) {
            changes[0]++;
            continue;
        }
        if (bill == 10) {
            if (changes[0] == 0) return false;
            changes[1]++;
            changes[0]--;
            continue;
        }
        if (bill == 20) {
            if (changes[1] > 0) {
                changes[0]--;
                changes[1]--;
            } else {
                changes[0] -= 3;
            }
            if (changes[0] < 0) return false;
        }
    }
    return true;
};