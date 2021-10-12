// > 给定一个字符串 str ,请你找出其中不含有重复字符的 最长子串的 长度

// 示例 1:

// 输入: str = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 解题思路: 
// 1.要找出的是最长子串的长度
// 2.我们先用一个数组用来存取遍历的每个字符,假设最长的子串长度max是 0 
// 3.遍历字符串,在存放最长子串的数组里用indexOf去查找,如果数组中不存在这个字符,就把这个字符推进去.
// 4.如果存在的话,先把数组最前面的那个存在给删除了,再推进去该字符.
// 5.每次遍历 数组的长度和max作对比,取最大值

const str = "abcafebcbb" 
const lengthOfLongestSubstring = (s) => {
  let arr = [], max = 0
  for(let i = 0;i < s.length; i++) {
      let index = arr.indexOf(s[i])
      if(index !== -1) {
          // 若数组arr中包含已有的字符串，则删除前一个
          arr.splice(0, index+1);
      }
      // 每次往arr中推入s[i]
      arr.push(s[i])
      // 比较arr的长度和 max取最大值
      max = Math.max(arr.length, max) 
  }
  return max
}
console.log("🚀 lengthOfLongestSubstring", lengthOfLongestSubstring(str))

// > 给定一个字符串 str ,请你找出其中不含有重复字符的 最长子串

// 示例 1:
// 输入: str = "abcabcbb"
// 输出: [ 'bcafe', 'cafeb', 'afebc' ]
// 解释: 因为无重复字符的最长子串是  [ 'bcafe', 'cafeb', 'afebc' ]


// 解题思路: 
// 1.要找出的是最长子串的长度
// 2.我们先用一个数组arr用来存取遍历的不重复的每个字符,假设一个obj,用不重复字符的作为key,不重复长度做为值.
// 3.遍历字符串,在存放最长子串的数组里用indexOf去查找,如果数组中不存在这个字符,就把这个字符推进去.
// 4.如果存在的话,先给obj添加key,value,再把数组最前面的那个存在给删除了,再推进去该字符.
// 5.从对象中获取最大的值.
// 6.遍历对象,最大值的key return出来这个数组

const maxLongSon = (s) => {
  let arr = [], obj = {}
  for(let i = 0;i < s.length; i++) {
      let index = arr.indexOf(s[i])
      if(index !== -1) {
          // 若数组arr中包含已有的字符串，则删除前一个
          const key = arr.join('')
          obj[key] = arr.length
          arr.splice(0, index+1);
      }
      // 每次往arr中推入s[i]
      arr.push(s[i])
  }
  const values = Object.values(obj)
  const max = Math.max(...values)
  const temp = []
  for (const key in obj) {
    if (obj[key] === max) {
      temp.push(key)
    }
  }
  return temp
}

console.log("🚀 ~ maxLongSon", maxLongSon(str))
