// 439. 三元表达式解析器
// 之前的问题在于： 
// 1. 栈太多，理论上一个栈就好了。 
// 2. 上一次是从前往后的，并且进行了递归（方向和方法都有一定的偏差）

var parseTernary = function (expression) {
  const len = expression.length;
  const stack = [];

  for (let i = len - 1; i > 0; i--) {
    if (expression[i] === '?') {
      // 出栈操作
      const valueStr = expression[i - 1];
      const trueVal = stack.pop();
      stack.pop();
      const falseVal = stack.pop();
      if (valueStr === 'T') {
        stack.push(trueVal)
      }
      if (valueStr === 'F') {
        stack.push(falseVal)
      }
      i--
    } else {
      // 入栈
      stack.push(expression[i])
    }
  }

  return stack[0];
};

console.log('T?T?F:5:3', parseTernary('T?T?F:5:3'))

// 1. 注意 i-- 的处理
// 2. 逆序循环
// 3. 模拟出栈入栈。 'T?T?F:5:3' -> T?F:5出栈 并且F入栈 保证结构不发生变化