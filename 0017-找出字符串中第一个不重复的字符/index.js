题目:
// 1.找出字符串中第一个不重复的字符,如果没有不重复的返回'',忽略字符大小写,考虑奇数字符
const s = '∞§ﬁ›ﬂ∞§'
解法一: 
function firstNonRepeatingLetter1(s) {
  // 先把字符串中是英文字符统一大小写
  const str = s.replace(/[a-z]/gi, match => match.toUpperCase())
  for (const item of str) {
    const fromIndex = str.indexOf(item)
    if (str.indexOf(item, fromIndex + 1) === -1) {
      return s[fromIndex]
    }
  }
  return ''
}
console.log(`firstNonRepeatingLetter1`, firstNonRepeatingLetter1(s))

// 解法二:
function firstNonRepeatingLetter2(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}
console.log(`firstNonRepeatingLetter2`, firstNonRepeatingLetter2(s))
