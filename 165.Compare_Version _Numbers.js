/*
165. Compare Version Numbers
拆分字符串并比较即可
*/
var compareVersion = function(version1, version2) {
    function compareRevision(s1, s2) {
        n1 = Number(s1);
        n2 = Number(s2);
        if (n1 > n2) return 1;
        else if (n1 < n2) return -1;
        else return 0;
    }

    let arr1 = version1.split('.');
    let arr2 = version2.split('.');
    let i = 0; j = 0;

    while (i <= arr1.length-1 && j <= arr2.length-1) {
        let result = compareRevision(arr1[i], arr2[j]);
        if (result) return result;
        i++;
        j++;
    }

    while (i <= arr1.length-1) {
        if (Number(arr1[i])) return 1;
        i++;
    }

    while (j <= arr2.length-1) {
        if (Number(arr2[j])) return -1;
        j++;
    }
    return 0;
};
let version1 = "1.0.1", version2 = "1";
console.log(compareVersion(version1, version2));