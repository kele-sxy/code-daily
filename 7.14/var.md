flowchart TD
    A[源码: var a = 1;] --> B[词法分析（Tokenizer）]
    B --> C[语法分析（Parser）生成AST]
    C --> D[作用域处理（Scope）]
    D --> E[字节码生成（Bytecode Generator）]
    E --> F[字节码执行（Interpreter）]
    F --> G[变量赋值到上下文（Context）]

