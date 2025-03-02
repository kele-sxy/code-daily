// 624. 数组列表中的最大距离

// 给定 m 个数组，每个数组都已经按照升序排好序了。

// 现在你需要从两个不同的数组中选择两个整数（ 每个数组选一个） 并且计算它们的距离。 两个整数 a 和 b 之间的距离定义为它们差的绝对值 | a - b | 。

//   返回最大距离。

// 示例 1：

// 输入：[[1, 2, 3], [4, 5], [1, 2, 3]]
// 输出： 4
// 解释：
// 一种得到答案 4 的方法是从第一个数组或者第三个数组中选择 1， 同时从第二个数组中选择 5。

// 示例 2：

// 输入： arrays = [
//   [1],
//   [1]
// ]
// 输出： 0

// 提示：

// m == arrays.length
// 2 <= m <= 105
// 1 <= arrays[i].length <= 500 -
//   10^4 <= arrays[i][j] <= 10^4
// arrays[i] 以 升序 排序。
// 所有数组中最多有 105 个整数。

/**
 * @param {number[][]} arrays
 * @return {number}
 */

// func 1 (暴力求解)
const unitDistance = (arr1, arr2) => {
  const len = arr1.length;
  const len2 = arr2[0].length;

  let min1 = arr1[0];
  let max1 = arr2[0][len2 - 1] ?? 0;

  let max2 = arr1[len - 1];
  let min2 = arr2[0][0] ?? -Infinity;

  arr2.forEach((item) => {
    const tempLen = item.length;
    max1 = Math.max(max1, item[tempLen - 1]);
    min2 = Math.max(max2, item[0]);
  });

  return Math.max(max1 - min1, max2 - min2);
};

// const maxDistance = (arrays) => {
//   const len = arrays.length;
//   let dis = 0;
//   arrays.forEach((item, index) => {
//     dis = Math.max(dis, unitDistance(item, [...arrays.slice(0, index), ...arrays.slice(index + 1, len)]))
//   })
//   return dis
// }

const maxDistance = function (arrays) {
  let res = 0;
  const alen = arrays.length;

  const len = arrays[0].length;
  let min = arrays[0][0];
  let max = arrays[0][len - 1];

  arrays.slice(1, alen).forEach((item) => {
    const itemLen = item.length;
    const tempMax = Math.max(max - item[0], item[itemLen - 1] - min);

    res = Math.max(res, tempMax);

    min = Math.min(min, item[0]);
    max = Math.max(max, item[itemLen - 1]);
  });
  return res;
};
