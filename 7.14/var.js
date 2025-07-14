// 用代码实现支持 var/let/const 的变量声明和赋值操作，体现抽象语法树（AST）、字节码生成和字节码执行

// 词法分析（Tokenizer）
function tokenize(code) {
  // 简单分割，实际V8更复杂
  return code.match(/\w+|=|;|\d+/g);
}

// 语法分析（Parser）  
function parse(tokens) {
  // 支持 var/let/const a = 1;
  const kind = tokens[0];
  if (
    (kind === 'var' || kind === 'let' || kind === 'const') &&
    tokens[2] === '=' &&
    tokens[4] === ';'
  ) {
    return {
      type: 'Program',
      body: [
        {
          type: 'VariableDeclaration',
          kind: kind,
          declarations: [
            {
              type: 'VariableDeclarator',
              id: { type: 'Identifier', name: tokens[1] },
              init: { type: 'Literal', value: Number(tokens[3]) }
            }
          ]
        }
      ]
    };
  }
  throw new Error('只支持 var/let/const a = 1; 这种格式');
}

// 作用域管理（Scope） 
class Scope {
  constructor(parent = null) {
    this.vars = {};
    this.consts = {};
    this.parent = parent;
  }
  declare(name, value, kind = 'var') {
    if (kind === 'const') {
      if (name in this.vars || name in this.consts) {
        throw new Error('常量已声明: ' + name);
      }
      this.consts[name] = value;
    } else {
      if (name in this.vars || name in this.consts) {
        throw new Error('变量已声明: ' + name);
      }
      this.vars[name] = value;
    }
  }
  get(name) {
    if (name in this.vars) return this.vars[name];
    if (name in this.consts) return this.consts[name];
    if (this.parent) return this.parent.get(name);
    throw new Error('变量未定义: ' + name);
  }
  isConst(name) {
    if (name in this.consts) return true;
    if (this.parent) return this.parent.isConst(name);
    return false;
  }
}

// 字节码生成器
function generateBytecode(ast) {
  // 支持 var/let/const a = 1;
  const bytecode = [];
  if (ast.type === 'Program') {
    for (const node of ast.body) {
      if (node.type === 'VariableDeclaration') {
        for (const decl of node.declarations) {
          // 先将字面量压栈，再存储到变量
          bytecode.push({ op: 'PUSH_CONST', value: decl.init.value });
          bytecode.push({
            op: 'STORE_VAR',
            name: decl.id.name,
            kind: node.kind
          });
        }
      } else {
        throw new Error('不支持的AST节点类型: ' + node.type);
      }
    }
  } else {
    throw new Error('不支持的AST节点类型: ' + ast.type);
  }
  return bytecode;
}

// 字节码执行器
function executeBytecode(bytecode, scope) {
  const stack = [];
  for (const instr of bytecode) {
    if (instr.op === 'PUSH_CONST') {
      stack.push(instr.value);
    } else if (instr.op === 'STORE_VAR') {
      const value = stack.pop();
      scope.declare(instr.name, value, instr.kind);
    } else {
      throw new Error('未知字节码指令: ' + instr.op);
    }
  }
  // 返回作用域变量（合并var和const）
  return { ...scope.vars, ...scope.consts };
}

// 测试代码
const codes = [
  'var a = 1;',
  'let b = 2;',
  'const c = 3;'
];

for (const code of codes) {
  const tokens = tokenize(code); // 词法分析
  const ast = parse(tokens); // 语法分析
  console.log('抽象语法树(AST):', JSON.stringify(ast, null, 2));
  const bytecode = generateBytecode(ast); // 字节码生成
  console.log('生成的字节码:', JSON.stringify(bytecode, null, 2));
  const globalScope = new Scope(); // 作用域
  const resultVars = executeBytecode(bytecode, globalScope); // 字节码执行
  console.log('执行字节码后作用域变量:', resultVars);
}