// https: //leetcode.cn/problems/confusing-number/description/?envType=study-plan-v2&envId=premium-algo-100

// 给定一个数字 N， 当它满足以下条件的时候返回 true：

// 原数字旋转 180° 以后可以得到新的数字。

// 如 0, 1, 6, 8, 9 旋转 180° 以后， 得到了新的数字 0, 1, 9, 8, 6。

// 2, 3, 4, 5, 7 旋转 180° 后， 得到的不是数字。

// 易混淆数(confusing number) 在旋转180° 以后， 可以得到和原来不同的数， 且新数字的每一位都是有效的。



// /**
//  * @param {number} n
//  * @return {boolean}
//  */

// const isLike = (number) => {
//   return number === 0 || number === 8 || number === 1
// }

// var confusingNumber = function (n) {
//   if (n === 1 || n === 0 || n === 8) return false;
//   const revertMap = {
//     0: 0,
//     1: 1,
//     6: 9,
//     8: 8,
//     9: 6
//   }
//   const likeArr = []
//   const res = String(n).split('').reverse();

//   let isConfusingNumber = true;

//   for (let i = 0; i < res.length; ++i) {
//     if (!revertMap[res[i]]) {
//       isConfusingNumber = false
//       break
//     }

//     const tempLike = isLike(Number(res[i]));

//     likeArr.push(tempLike ? 1 : 0);
//   }

//   console.log('isConfusingNumber', likeArr.join(''), likeArr.reverse().join(''), likeArr.length)

//   if (likeArr.join('') === likeArr.reverse().join('') && likeArr.length > 1) {
//     isConfusingNumber = false
//   }

//   return isConfusingNumber;

// };

const confusingNumber = (n) => {
  const revertMap = {
    0: 0,
    1: 1,
    6: 9,
    8: 8,
    9: 6
  }

  let isConfusingNumber = true;

  const arr = String(n).split('')
  for (let i = 0; i < arr.length; i++) {
    if (revertMap[arr[i]] === undefined) {
      return false;
    }
  }

  const res = arr.map((item) => {
    return revertMap[item]
  }).reverse().join('')

  res == n ? isConfusingNumber = false : isConfusingNumber = true;

  return isConfusingNumber;
}

confusingNumber(160)