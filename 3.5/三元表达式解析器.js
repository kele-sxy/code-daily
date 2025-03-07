// 439. 三元表达式解析器
// 尝试过
// 中等
// 相关标签
// 相关企业
// 给定一个表示任意嵌套三元表达式的字符串 expression， 求值并返回其结果。

// 你可以总是假设给定的表达式是有效的， 并且只包含数字， '?'，
// ':'，
// 'T'
// 和 'F'，
// 其中 'T'
// 为真， 'F'
// 为假。 表达式中的所有数字都是 一位 数(即在[0, 9] 范围内)。

// 条件表达式从右到左分组(大多数语言中都是这样)， 表达式的结果总是为数字， 'T'
// 或 'F'。



// 示例 1：

// 输入： expression = "T?2:3"
// 输出： "2"
// 解释： 如果条件为真， 结果为 2； 否则， 结果为 3。
// 示例 2：

// 输入： expression = "F?1:T?4:5"
// 输出： "4"
// 解释： 条件表达式自右向左结合。 使用括号的话， 相当于：
//   "(F ? 1 : (T ? 4 : 5))"-- > "(F ? 1 : 4)"-- > "4"
// or "(F ? 1 : (T ? 4 : 5))"-- > "(T ? 4 : 5)"-- > "4"
// 示例 3：

// 输入： expression = "T?T?F:5:3"
// 输出： "F"
// 解释： 条件表达式自右向左结合。 使用括号的话， 相当于：
//   "(T ? (T ? F : 5) : 3)"-- > "(T ? F : 3)"-- > "F"
// "(T ? (T ? F : 5) : 3)"-- > "(T ? F : 5)"-- > "F"
var parseTernary = function (expression) {
  const stackexp = [];
  const stackrule = [];
  const stackyes = [];
  let trueVal = ''
  let exp = ''
  const len = expression.length
  for (let i = 0; i < len; ++i) {
    if (expression[i] === '?') {
      // 入栈 stackexp
      console.log('exp', exp)
      stackexp.push(exp)
      exp = '' // reset
      // 入栈 stackrule
      stackrule.push('?')
    } else if (expression[i] === ':') {
      // 出栈 stackexp
      const curExp = stackexp.pop()
      const curRule = stackrule.pop()
      stackyes.push(exp)
      if (curExp === 'T') {
        trueVal = exp;
        exp == ''

        // const restStr = expression.slice(i + 1, len).includes(':')  ? expression.slice(i + 1, len).split(':')[1] : expression.slice(i + 1, len);

        // if (!isNaN(Number(restStr))) {
        //     return restStr
        // } else {
        //     return parseTernary(`${curExp}${curRule}${restStr}`)
        // }
        // console.log('restStr', restStr)
        return trueVal;
      }
      if (curExp === 'F') {
        const restStr = expression.slice(i + 1, len);
        if (!isNaN(Number(restStr))) {
          return restStr
        } else {
          return parseTernary(restStr)
        }
      }
    } else {
      exp += expression[i];
    }
  }
};

// TODO: 29 / 49 个通过的测试用例

// 没做出来