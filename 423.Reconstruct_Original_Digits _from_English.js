/**
423. Reconstruct Original Digits from English
思路:分析字母的唯一性后一个个减去已知的字母就行
有点hardcode
 */
var originalDigits = function(s) {
    let hash = new Map();
    for (let c of s) {
        if (hash.has(c)) hash.set(c, hash.get(c)+1);
        else hash.set(c, 1);
    }
    let res = new Array(10).fill(0);
    if (hash.has('z')) {// zero
        res[0] = hash.get('z');
        hash.set('e', hash.get('e') - res[0]);
        hash.set('r', hash.get('r') - res[0]);
        hash.set('o', hash.get('o') - res[0]);
    }
    if (hash.has('w')) {// two
        res[2] = hash.get('w');
        hash.set('t', hash.get('t') - res[2]);
        hash.set('o', hash.get('o') - res[2]);
    }
    if (hash.has('u')) {// four
        res[4] = hash.get('u');
        hash.set('f', hash.get('f') - res[4]);
        hash.set('o', hash.get('o') - res[4]);
        hash.set('r', hash.get('r') - res[4]);
    }
    if (hash.has('x')) { // six
        res[6] = hash.get('x');
        hash.set('s', hash.get('s') - res[6]);
        hash.set('i', hash.get('i') - res[6]);
    }
    if (hash.has('g')) { // eight
        res[8] = hash.get('g');
        hash.set('e', hash.get('e') - res[8]);
        hash.set('i', hash.get('i') - res[8]);
        hash.set('h', hash.get('h') - res[8]);
        hash.set('t', hash.get('t') - res[8]);
    }
    if (hash.has('o')) { // one
        res[1] = hash.get('o');
        hash.set('n', hash.get('n') - res[1]);
        hash.set('e', hash.get('e') - res[1]);
    }
    if (hash.has('h')) { // three
        res[3] = hash.get('h');
        hash.set('t', hash.get('t') - res[3]);
        hash.set('r', hash.get('r') - res[3]);
        hash.set('e', hash.get('e') - 2*res[3]);
    }
    if (hash.has('f')) { // five
        res[5] = hash.get('f');
        hash.set('i', hash.get('i') - res[5]);
        hash.set('v', hash.get('v') - res[5]);
        hash.set('e', hash.get('e') - res[5]);
    }
    if (hash.has('v')) { // seven
        res[7] = hash.get('v');
    }
    if (hash.has('i')) res[9] = hash.get('i'); // nine

    let ans = [];
    for (let i = 0; i <= 9; i++) {
        for (let j = 1; j <= res[i]; j++) ans.push(i);
    }
    return ans.join('');
};