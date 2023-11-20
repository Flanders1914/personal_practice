/**
434. Number of Segments in a String
水题
 */
var countSegments = function(s) {
    let res = 0;
    let is_seg = false;
    for (let c of s) {
        if (c == ' ') {
            if (is_seg) is_seg = false;
            continue;
        }
        else {
            if (is_seg) continue;
            else {
                is_seg = true;
                res++;
                continue;
            }
        }
    }
    return res;
};
console.log(countSegments("Hello, my name is John"));