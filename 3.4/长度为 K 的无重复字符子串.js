const hasSameLen = (str, k) => {
  return [...new Set([...str.split('')])].length === k
}

var numKLenSubstrNoRepeats = function (s, k) {
  const len = s.length;
  if (len < k) {
    return 0;
  }
  let res = 0;
  for (let i = 0; i <= len - k; ++i) {
    if (hasSameLen(s.slice(i, i + k), k)) {
      res++;
    }
  }
  return res;
};

// 做完了时间复杂度有点高