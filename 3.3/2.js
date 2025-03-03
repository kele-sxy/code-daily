// https: //leetcode.cn/problems/single-row-keyboard/description/?envType=study-plan-v2&envId=premium-algo-100
/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function (keyboard, word) {
  const curMap = {};

  for (let i = 0; i < keyboard.length; ++i) {
    curMap[keyboard[i]] = i;
  }

  let step = 0;
  let curIndex = 0

  for (const s of word) {
    step += Math.abs(curMap[s] - curIndex)
    curIndex = curMap[s]
  }

  return step;
};