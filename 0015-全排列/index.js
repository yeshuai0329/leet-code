// Examples:
// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// 解法一:
function permutations(string) {
  if (string.length == 1) return [string]
  const strArr = string.split('')
  let len = strArr.length
  let res = [] // 所有排列结果

  let arrange = (tempArr, leftArr) => {
    if (tempArr.length === len) {
      res.push(tempArr.join('')) // 得到全排列的每个元素都是字符串
    } else {
      leftArr.forEach((item, index) => {
        let temp = [].concat(leftArr)
        temp.splice(index, 1)
        arrange(tempArr.concat(item), temp) 
      })
    }
  }
  arrange([], strArr)
  return [...new Set(res)]
}

console.log('permutations',permutations('1234'))