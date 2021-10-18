// 题目:
// 删除 str 字符串中所有的含有sub字符的字符
const str = 'They are students'
const sub = 'aeiou'

// 解法一: 
const delStr = (str, sub) => {
  return str.replace(new RegExp('['+sub+']', 'gi'), '')
}

console.log(delStr(str, sub))