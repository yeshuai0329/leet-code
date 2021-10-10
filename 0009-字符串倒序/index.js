// 题目: 把字符串中大于等于5个字母的单词倒序输出
// Example
// spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
// spinWords("This is a test") => "This is a test" 
// spinWords("This is another test") => "This is rehtona test"


// 解法一: 
const spinWords1 = (string) => {
  const strArr = string.split(' ').map(item => {
    if (item.length >= 5) {
      return item.split('').reverse().join('')
    }
    return item
  })
  return strArr.join(' ')
}

console.log(`spinWords1`, spinWords1("Hey fellow warriors"))

// 解法二: 
const spinWords2 = (string) => {
  return string.replace(/\w{5,}/ig, (match) => match.split('').reverse().join(''))
}

console.log(`spinWords2`, spinWords2("Hey fellow warriors"))