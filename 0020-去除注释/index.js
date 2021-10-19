// 题目:完成该解决方案，以便它剥离传入的任何一组注释标记后面的所有文本。行末尾的任何空格也应该去掉。

// Example: ['#', '!']
// apples, pears # and bananas
// grapes
// bananas !apples

// 输出: 
// apples, pears
// grapes
// bananas

// Example:
// "Q @b\nu\ne -e f g", ["@", "-"]  => return "Q\nu\ne"

// 思路解析:
// 首先字符串中的/n 是换行符
// 根据题意,也就是说把markers数组中的符号当做注释符号,意思就是把注释符号以及后边的都替换空字符串
// 并且注释符号前的空格也给替换成空了
// 这里主要考虑正则如何编写 如何生成变量正则

// 解法一:
const solution = (input, markers) => {
  return input.replace(new RegExp('.{0,1}'+'[' +markers.join('') + ']'+ '.{0,}' ,'gi'), '')
};