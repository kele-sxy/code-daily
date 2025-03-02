// 161. 相隔为 1 的编辑距离
// 中等
// 相关标签
// 相关企业
// 给定两个字符串 s 和 t， 如果它们的编辑距离为 1， 则返回 true， 否则返回 false。

// 字符串 s 和字符串 t 之间满足编辑距离等于 1 有三种可能的情形：

// 往 s 中插入 恰好一个 字符得到 t
// 从 s 中删除 恰好一个 字符得到 t
// 在 s 中用 一个不同的字符 替换 恰好一个 字符得到 t

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  // 类似滑动窗口
  let diff = 0;
  const slen = s.length;
  const tlen = t.length;

  if ((slen === 0 && tlen === 1) || (slen === 1 && tlen === 0)) {
    return true;
  }
  if (slen === 1 && tlen === 1 && s !== t) {
    return true;
  }
  if (Math.abs(slen - tlen) > 1) {
    return false;
  }
  if (slen === tlen) {
    for (let i = 0; i < slen; i++) {
      if (s[i] !== t[i]) {
        diff++;
        if (diff > 1) {
          return false;
        }
      }
    }
  }
  const maxLen = Math.max(slen, tlen)

  if (Math.abs(slen - tlen) === 1) {
    for (let i = 0, j = 0; i < maxLen, j < maxLen; i++, j++) {
      if ((s[i] && t[j] === undefined) || (t[j] && s[i] === undefined)) {
        return true;
      }

      if (s[i] !== t[j]) {
        console.log(s.slice(i, slen))
        console.log(t.slice(j + 1, tlen))
        // 如果
        const isSame = s.slice(i, slen) === t.slice(j + 1, tlen) || s.slice(i + 1, slen) === t.slice(j, tlen)
        return isSame;
      }
    }
  }

  return diff === 1;
};

console.log(isOneEditDistance('ac', 'a'))