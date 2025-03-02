// https: //leetcode.cn/problems/confusing-number-ii/
/**
 * @param {number} n
 * @return {number}
 */

const revertMap = {
  0: 0,
  1: 1,
  6: 9,
  8: 8,
  9: 6
}

// 可以用来构建混淆数字的数字
const digits = [0, 1, 6, 8, 9];

var confusingNumberII = function (n) {
  let count = 0;

  // 回溯函数
  const backtrack = (curr, rotated, pos) => {
    // 检查当前数字是否有效且是混淆数字
    if (curr !== 0 && curr !== rotated) {
      count++;
    }

    // 尝试添加新的数字
    for (const d of digits) {
      // 跳过前导零
      if (curr === 0 && d === 0) continue;

      // 计算新的数字
      const newNum = curr * 10 + d;
      if (newNum > n) return; // 剪枝

      // 计算旋转后的新数字
      const newRotated = revertMap[d] * pos + rotated;

      backtrack(newNum, newRotated, pos * 10);
    }
  }

  backtrack(0, 0, 1);
  return count;
};