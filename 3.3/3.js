// https: //leetcode.cn/problems/longest-substring-with-at-most-two-distinct-characters/description/?envType=study-plan-v2&envId=premium-algo-100
// var lengthOfLongestSubstringTwoDistinct = function (s) {
//   const n = s.length;
//   if (n < 3) {
//     return n;
//   }

//   // 滑动窗口的左右指针
//   let left = 0,
//     right = 0;
//   // hashmap 中的字符 -> 它在滑动窗口中最靠右的位置
//   const hashmap = new Map();
//   let max_len = 2;

//   while (right < n) {
//     // 当滑动窗口包含小于 3 个字符
//     hashmap.set(s[right], right);
//     right++;

//     // 滑动窗口包含 3 个字符
//     if (hashmap.size == 3) {
//       let del_idx = Infinity;
//       for (const [key, val] of hashmap) {
//         del_idx = Math.min(del_idx, val);
//       }
//       // 删除最左边的字符
//       hashmap.delete(s[del_idx]);
//       left = del_idx + 1;
//     }
//     max_len = Math.max(max_len, right - left);
//   }
//   return max_len;
// };


// // 滑动窗口

// // 1. leetcode 76. 最小覆盖子串
// // 2. leetcode 209. 长度最小的子数组
// // 3. leetcode 438. 找到字符串中所有字母异位词
// // 4. leetcode 3. 无重复字符的最长子串
// // 5. leetcode 674. 最长连续递增序列

// 487. 最大连续1的个数 II

// 给定一个二进制数组 nums， 如果最多可以翻转一个 0， 则返回数组中连续 1 的最大个数。



// 示例 1：

// 输入： nums = [1, 0, 1, 1, 0]
// 输出： 4
// 解释： 翻转第一个 0 可以得到最长的连续 1。
// 当翻转以后， 最大连续 1 的个数为 4。
// 示例 2:

//   输入： nums = [1, 0, 1, 1, 0, 1]
// 输出： 4