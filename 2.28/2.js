// 280. 摆动排序

// 给你一个的整数数组 nums, 将该数组重新排序后使 nums[0] <= nums[1] >= nums[2] <= nums[3]... 

// 输入数组总是有一个有效的答案。

// 示例 1:

//   输入： nums = [3, 5, 2, 1, 6, 4]
// 输出：[3, 5, 1, 6, 2, 4]
// 解释：[1, 6, 2, 5, 3, 4] 也是有效的答案
// 示例 2:

//   输入： nums = [6, 6, 5, 6, 3, 8]
// 输出：[6, 6, 5, 6, 3, 8]


// 提示：

// 1 <= nums.length <= 5 * 104
// 0 <= nums[i] <= 104
// 输入的 nums 保证至少有一个答案。



// 进阶： 你能在 O(n) 时间复杂度下解决这个问题吗？

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// const divLoop = (nums) => {
//   if (nums.length === 0) return [];
//   if (nums.length === 1) return nums;

//   const restArr = nums.slice(0, nums.length - 1)
//   const center = nums[nums.length - 1]
//   const restArrLen = restArr.length;


//   let left = null;
//   let right = null;
//   let res = null;
//   left = divLoop(restArr.slice(0, Math.floor(restArrLen / 2)))
//   right = divLoop(restArr.slice(Math.floor(restArrLen / 2), restArrLen))
//   console.log('left, right', left, right)

//   res = [...left, center, ...right]
//   return res;
// }

// // 递归，先取最大的。[有序1，有序2， max]
// var wiggleSort = function (nums) {
//   const sortArr = nums.sort()
//   divLoop(sortArr).forEach((item, index) => {
//     nums[index] = item
//   });
// };


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b) // 不能是nums.sort() 因为这个是字符串排序
  const len = nums.length;
  for (let i = 1; i < len - 1; i += 2) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
  }
};