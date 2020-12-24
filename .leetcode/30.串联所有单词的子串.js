/**
 * /*
 *
 * [30] 串联所有单词的子串
 *
 * @format
 * @lc app=leetcode.cn id=30 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = function (s, words) {    
    let indexs = [];
    const map = {};
    const indexMap = {};
    const len = words.length
    if (len === 0) return [];
    const subLen = words[0].length

    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (map[word]) {
            map[word] += 1
        } else {
            map[word] = 1;
        }
        let index = s.indexOf(word);
        if (indexMap[index]) continue
        while (index > -1) {
            if (s.length - index < len * subLen) break
            if (index > -1) {
                indexMap[index] = true
                indexs.push(index);
            }
            index = s.indexOf(word, index + 1);
        }
    }
    const fun = (index) => {
        const needMap = {};
        for (let i = 0; i < len; i++) {
            const needValue = s.slice(index + i * subLen, index + (i + 1) * subLen)
            if (!map[needValue]) return false;
            if (needMap[needValue]) {
                needMap[needValue] += 1;
            } else {
                needMap[needValue] = 1;
            }
            if (needMap[needValue] > map[needValue]) return false;
        }
        return true
    }
    const result = [];
    for (let j = 0; j < indexs.length; j++) {
        const index = indexs[j];
        if (fun(index)) {
            result.push(index)
        }
    }
    return result
}
// @lc code=end

// Accepted
// 176/176 cases passed (7048 ms)
// Your runtime beats 5 % of javascript submissions
// Your memory usage beats 95.09 % of javascript submissions (42 MB)

// v1
// Accepted
// 176/176 cases passed (920 ms)
// Your runtime beats 24.88 % of javascript submissions
// Your memory usage beats 49.13 % of javascript submissions (45.3 MB)

// v2
// Accepted
// 176/176 cases passed (528 ms)
// Your runtime beats 42.75 % of javascript submissions
// Your memory usage beats 55.8 % of javascript submissions (44.4 MB)

// v3
// Accepted
// 176/176 cases passed (240 ms)
// Your runtime beats 55.5 % of javascript submissions
// Your memory usage beats 51.77 % of javascript submissions (44.8 MB)