// https: //leetcode.cn/problems/counting-elements/description/?envType=study-plan-v2&envId=premium-algo-100/**

var countElements = function (arr) {
  let conut = 0
  arr.forEach((item) => {
    if (arr.includes(item + 1)) {
      ++conut;
    }
  })
  return conut
};