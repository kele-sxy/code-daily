// 266. 回文排列
// 简单
// 相关标签
// 相关企业
// 提示
// 给你一个字符串 s， 如果该字符串的某个排列是 回文串， 则返回 true； 否则， 返回 false。



// 示例 1：

// 输入： s = "code"
// 输出： false
// 示例 2：

// 输入： s = "aab"
// 输出： true
// 示例 3：

// 输入： s = "carerac"
// 输出： true

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  // 单着的有且只有一个
  const itemMap = {}
  for (const item of s) {
    if (!itemMap[item]) {
      itemMap[item] = 1;
    } else {
      itemMap[item] = itemMap[item] + 1
    }
  }
  let singleNum = 0;
  Object.keys(itemMap).forEach((item) => {
    if (itemMap[item] % 2 !== 0) {
      singleNum++
    }
  })
  return singleNum <= 1;
};


/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindromeBybit = function (s) {
  let mask = 0;
  for (let char of s) {
    // 获取字符的ASCII码，并将对应位进行异或操作
    mask ^= 1 << (char.charCodeAt(0));
  }
  // 检查mask中1的个数是否<=1
  // mask & (mask - 1)可以消除最右边的1
  return (mask & (mask - 1)) === 0;
};

// int arr[] = {
//   2,
//   3,
//   4,
//   3,
//   2
// };
// int result = 0;
// for (int num: arr) {
//   result ^= num;
// }