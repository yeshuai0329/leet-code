/*
题目: 
编写一个函数，在给定一个文本字符串（可能带有标点和换行符）的情况下，按出现次数的降序返回前三位最常出现的单词的数组。
假设：
单词是一组字母（A到Z），可选地包含ASCII中的一个或多个撇号（'）。
撇号可以出现在单词的开头、中间或结尾（“abc、abc”、“abc”、ab'c都是有效的）
任何其他字符（如#、\、/、…）都不是单词的一部分，应视为空白。
匹配项应不区分大小写，结果中的单词应小写。
领带可以任意断开。
如果文本包含的唯一单词少于三个，则应返回前2个或前1个单词，如果文本不包含单词，则返回空数组。
*/

/*
Example:

topThreeWords("a a a  b  c c  d d d d  e e e e e")   return => ['e','d','a']
topThreeWords("a a c b b")   return => ['a','b','c']
topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")   return =>['e','ddd','aa']
topThreeWords("  //wont won't won't ")   return => ["won't", "wont"]
topThreeWords("  , e   .. ")   return => ["e"]
topThreeWords("  ...  ")   return => []
topThreeWords("  '  ")   return => []
*/

/**
思路分析:
1. 利用正则,先把符合条件的单词字符挑出来,根据题意,这个符合规则的字符可能是这样的 (引号开头{0,1}次,字母{1,},单引号{0,1},字母{1,},引号{0,1})
所以正则就是/"?\w+'?\w*"?/g
2. 想着把跳出来的符合条件的字符保存在数组中,刚好字符串的方法match()可以匹配字符,保存在数组中或者返回null
3. 返回到数组中,那接下来就好做了, reduce 计数,注意规则(忽略大小写了),返回一个对象
4. 利用Object.entries() 这个方法把对象转化为二维数组,[[key,value]], 然后对value降序,过滤出来前三个,再用map()映射出二维数组中的key
5. 到此为止就获取到了符合条件的字符数组
 */

// 解法一:
function topThreeWords1(text) {
  // 挑选符合条件的字符,放进数组中
  const matchArr=text.match(/"?\w+'?\w*"?/g)
  // 当matchArr == null, 返回空数组
  if (!matchArr) return []
  // 计数
  const sumObj = matchArr.reduce((obj,cur) => {
    cur = cur.toLowerCase()
    obj[cur] ? obj[cur] = obj[cur] + 1: obj[cur] = 1
    return obj
  },{})
  // 返回符合条件的
  return Object
          .entries(sumObj)
          .sort((a,b) => b[1]-a[1])
          .filter((item,index) => index <= 2)
          .map(([a,b]) => a)
}
console.log(`topThreeWords1`, topThreeWords1("a a a  b  c c  d d d d  e e e e e"))


// 解法二:
function topThreeWords2(text) {
  let words = {}
  text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
    let c = words[match] || 0
    words[match] = ++c
  })
  return Object
          .keys(words)
          .sort(function(a,b){return words[b]-words[a]})
          .slice(0,3)
}
console.log(`topThreeWords2`, topThreeWords2("a a a  b  c c  d d d d  e e e e e"))


// 解法三:
function topThreeWords3(text) {
  let words = {}
  text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
    let c = words[match] || 0
    words[match] = ++c
  })
  return Object
          .keys(words)
          .sort(function(a,b){return words[b]-words[a]})
          .slice(0,3)
}
console.log(`topThreeWords3`, topThreeWords3("a a a  b  c c  d d d d  e e e e e"))