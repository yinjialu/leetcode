/**
 * /*
 *
 * [68] 文本左右对齐
 *
 * @format
 * @lc app=leetcode.cn id=68 lang=javascript
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    const result = [];
    const lineFun = () => {
        let len = maxWidth;
        const arr = [];
        let strLen = 0;
        while (words[0] && len >= words[0].length) {
            const str = words.splice(0, 1)[0];
            arr.push(str);
            len -= str.length + 1; // 更新当前行剩余可用长度
            strLen += str.length; // 记录当前字符串数组占有的长度
        }
        // 组装字符串数组和空字符串填充数组
        // 如果一行只有一个字符串，左对齐
        if (arr.length === 1) {
            arr.push(new Array(maxWidth - strLen).fill(' ').join(''));
            result.push(arr.join(''));
            return;
        }
        const isLastLine = words.length === 0; // 是否是最后一行
        const len2 = arr.length;
        // 如果是最后一行，左对齐
        if (isLastLine) {
            result.push(
                arr.join(' ') +
                    new Array(maxWidth - (strLen + len2 - 1)).fill(' ').join('')
            );
            return;
        }
        const emptyLen = maxWidth - strLen; // 占位空字符串总长度
        let restLen = emptyLen % (len2 - 1); // 平分后剩余的长度，从左到右分配到空字符串数组上
        const averageEmptyLen = Math.floor(emptyLen / (len2 - 1)); // 平均每个占位空字符长度
        for (let i = 0; i < len2 - 1; i++) {
            let len3 = averageEmptyLen;
            if (restLen > 0) {
                len3++;
                restLen--;
            }
            arr.splice(i * 2 + 1, 0, new Array(len3).fill(' ').join(''));
        }
        result.push(arr.join(''));
        return;
    };
    while (words.length > 0) {
        lineFun();
    }
    return result;
};
// @lc code=end

// Accepted
// 27/27 cases passed (76 ms)
// Your runtime beats 85.59 % of javascript submissions
// Your memory usage beats 40.54 % of javascript submissions (37.9 MB)
