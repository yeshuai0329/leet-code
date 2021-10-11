// 编写一个函数，该函数接受一个括号字符串，并确定括号的顺序是否有效。
// 如果字符串有效，函数应返回true；如果字符串无效，函数应返回false。

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// ((()))()()()()()(())() => true

// 分析:
// 根据Example分析,就是判断这个字符串括号是否正确闭合
// 想到一个思路方法,利用replace 正则,把符合起的() 全部替换成空 ''
// 来回循环替换几次,如果最后返回的字符串长度不变了,就代表替换完成了
// 最后就根据替换完的字符串是否是 ''字符串,来返回ture 或者 false

// 解法一:
const validParentheses1 = (parens) => {
  let str = parens
  let lastlen = null
  while (true) {
    lastlen = str.length
    str = str.replace(/(\(\)){0,}/g, '')
    if (str.length === lastlen) {
      break
    }
  }
  return str === '' ? true : false
}

console.log(`validParentheses1`, validParentheses1('((()))()()()()()(())()'))

// 解法二:
// 思路: 
// 设置替换正则,循环替换为空''
function validParentheses2(parens){
  var re = /\(\)/;
  // 这里 while 循环,判断条件是如果字符串中还有(),那么就继续替换
  while (re.test(parens)) parens = parens.replace(re, "");
  return !parens;
}

console.log(`validParentheses2`, validParentheses2('((()))()()()()()(())()'))

