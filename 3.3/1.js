// https: //leetcode.cn/problems/sentence-similarity/?envType=study-plan-v2&envId=premium-algo-100
/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */

const isSimilar = (str1, str2, similarPairs) => {
  if (str1 === str2) return true;
  const curMap = {}
  similarPairs.forEach((item) => {
    curMap[`${item[0]}-${item[1]}`] = true
    curMap[`${item[1]}-${item[0]}`] = true
  })
  return curMap[`${str1}-${str2}`] || curMap[`${str2}-${str1}`]
}

var areSentencesSimilar = function (sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) return false;
  let res = true;
  const len = sentence1.length;
  for (let i = 0; i < len; i++) {
    if (!isSimilar(sentence1[i], sentence2[i], similarPairs)) {
      return false;
    }
  }
  return res
};