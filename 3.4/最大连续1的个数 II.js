/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let left = 0,
    right = 0;
  let max = 0;
  let zeroCount = 0;

  const len = nums.length;

  while (right < len) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
};