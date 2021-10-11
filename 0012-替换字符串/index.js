// 本练习的目标是将字符串转换为新字符串
// ,如果该字符在原始字符串中仅出现一次,那么替换成 '('
// 如果该字符在原始字符串中出现多次 ')' ,忽略大小写。

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// 解法一:
function duplicateEncode1(word){
  return word.replace(/./g, m => {
    let reg = m
    if (m === '(' ||m === ')') reg = '\\'+ m 
    return word.match(new RegExp(reg, 'ig')).length === 1 ? '(' : ')'
  })
}
console.log(`duplicateEncode1`, duplicateEncode1('Success'))

// 解法二:
function duplicateEncode2(word){
  return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')')
    .join('');
}
console.log(`duplicateEncode2`, duplicateEncode2('Success'))

// 解法三
function duplicateEncode3(word) {
  return word
    .toLowerCase()
    .replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}
console.log(`duplicateEncode3`, duplicateEncode3('Success'))
