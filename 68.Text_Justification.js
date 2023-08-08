/**
68. Text Justification
思路：
最普通的一次迭代，用变量记录信息生成答案
注意：
1. 结尾行的padding和之前行不一样
2. 注意在padding空格前先判断 padding_num > 0
 */
var fullJustify = function(words, maxWidth) {
    const word_lengths = new Array(words.length).fill(0);
    for (let i = 0; i <= words.length -1; i++) {
        word_lengths[i] = words[i].length;
    }

    let row_length = 0, row_begin = 0, char_num = 0;
    let ans = [];

    for (let i = 0; i <= words.length -1; i++) {

        if (row_length + word_lengths[i] > maxWidth) {
            // padding_begin
            let padding_num = maxWidth - char_num;
            if (row_begin == i -1) {
                while (padding_num > 0) {
                    words[i -1] = words[i -1] + ' ';
                    padding_num--;
                }
                ans.push(words[i -1]);
            }
            else {
                while (padding_num > 0) {
                    for (let j = row_begin; j <= i -2; j++) {
                        words[j] = words[j] + ' ';
                        padding_num--;
                        if (padding_num == 0) break;
                    }
                }
                ans.push(words[row_begin]);
                for (let j = row_begin + 1; j <= i -1; j++) {
                    ans[ans.length -1] = ans[ans.length -1] + words[j];
                }
            }
            // padding_end
            row_begin = i;
            row_length = 0;
            char_num = 0;
        }

        row_length = word_lengths[i] + row_length + 1;
        char_num += word_lengths[i];

    }

    // 结尾处的padding 为 left-justified
    if (row_begin <= words.length -1) {
        let end = words.length -1;
        let padding_num = maxWidth - char_num;

        for (let i =row_begin; i <= end; i++) {
            if (padding_num == 0) break;
            words[i] = words[i] + ' ';
            padding_num--;
        }

        ans.push(words[row_begin]);
        for (i = row_begin + 1; i <= end; i++) {
            ans[ans.length -1] = ans[ans.length -1] + words[i];
        }
        
        while (padding_num > 0) {
            ans[ans.length -1] += ' ';
            padding_num--;
        }
    }

    return ans;
};

let ans = fullJustify(["What","must","be","acknowledgment","shall","be"],16);
for (let row of ans) console.log(row);