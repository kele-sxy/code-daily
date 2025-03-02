// https: //leetcode.cn/problems/perform-string-shifts/description/?envType=study-plan-v2&envId=premium-algo-100
// 1427. 字符串的左右移
// 已解答
// 简单
// 相关标签
// 相关企业
// 提示
// 给定一个包含小写英文字母的字符串 s 以及一个矩阵 shift， 其中 shift[i] = [direction, amount]：

// direction 可以为 0（ 表示左移） 或 1（ 表示右移）。
// amount 表示 s 左右移的位数。
// 左移 1 位表示移除 s 的第一个字符， 并将该字符插入到 s 的结尾。
// 类似地， 右移 1 位表示移除 s 的最后一个字符， 并将该字符插入到 s 的开头。
// 对这个字符串进行所有操作后， 返回最终结果。

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  const len = s.length;
  const shiftLen = shift.length
  let res = s;
  for (let i = 0; i < shiftLen; ++i) {
    const [direction, amount] = shift[i];
    const tempMove = amount % len
    // 左边
    if (direction === 0) {
      res = res.slice(tempMove, len) + res.slice(0, tempMove)
    }
    // 右边
    if (direction === 1) {
      res = res.slice(len - tempMove, len) + res.slice(0, len - tempMove)
    }
  }

  return res;
};