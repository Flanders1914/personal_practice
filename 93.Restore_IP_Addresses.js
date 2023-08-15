/**
93. Restore IP Addresses
思路：使用了递归，应该是做复杂了，下面的程序就不解释了
*/
var restoreIpAddresses = function(s) {
    let ans = [];

    const make_ip = function(previous, index, s, k) { 
        let last_seg = '';
        for (let i = previous.length -1; i >= 0; i--) {
            if (previous[i] == '.') break;
            else last_seg = previous[i] + last_seg;
        }
        last_seg = Number(last_seg);

        if (index == s.length -1) {
            if (k > 1) return;
            if (k == 0) {
                if (previous.at(-1) == '0' && last_seg == 0) return;
                if (last_seg*10 + Number(s[index]) <= 255) {
                    let temp = previous.slice();
                    temp += s[index];
                    ans.push(temp);
                }
                return;
            }
            if (k == 1) {
                if (last_seg > 0 || previous.at(-1) == '0') {
                    let temp = previous.slice();
                    temp += '.' + s[index];
                    ans.push(temp);
                }
                return;
            }
            return;
        }

        if (k == 0) {
            if (previous.at(-1) == '0') return;
            else {
                let the_last = s.slice(index);
                last_seg = Number(the_last) + last_seg * (10 ** the_last.length);
                if (last_seg <= 255) {
                    let temp = previous.slice();
                    temp += the_last;
                    ans.push(temp);
                }
                return;
            }
        }

        if (last_seg == 0 && previous.at(-1) == '0') {
            if (k > 0) {
                previous = previous + '.' + s[index];
                make_ip(previous, index +1, s, k-1);
                previous = previous.slice(0, previous.length -2);
            } else return;
        }
        else if ((last_seg*10 + Number(s[index])) <= 255) {
            previous = previous + s[index];
            make_ip(previous, index +1, s, k);
            previous = previous.slice(0, previous.length -1);
            if (k > 0 && previous.length != 0 && previous.at(-1) != '.') {
                previous = previous + '.' + s[index];
                make_ip(previous, index +1, s, k -1);
                previous = previous.slice(0, previous.length -2);
            }
        }
        else if (k > 0) {
            previous = previous + '.' + s[index];
            make_ip(previous, index +1, s, k -1);
            previous = previous.slice(0, previous.length -2);
        }

        return;
    };

    make_ip('', 0, s, 3);
    return ans;
};


console.log(restoreIpAddresses("00000"));