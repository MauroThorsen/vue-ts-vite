module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数的箭头前后使用一致的空格
    'no-var': ['error'], // 要求使用 let 或 const 而不是 var
    'object-shorthand': ['error', 'always'], // 要求或禁止对象字面量中方法和属性使用简写语法
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false }] // 要求回调函数使用箭头函数
  }
}
