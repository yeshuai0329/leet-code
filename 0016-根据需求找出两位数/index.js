/**
 * 题目:
 * 我的一个朋友将所有数字的顺序从1到n（其中n>0）。
 * 在这个序列中，他选择了两个数字，a和b。
 * 他说a和b的乘积应该等于序列中所有数字的和，不包括a和b。
 * 给定一个数字n，你能告诉我他从序列中排除的数字吗？
 */

// 分析: 
// 根据题意,先把这个数字的1到n的和求出来,再减去i,j 等于 i*j
// 然后就是双层for循环嵌套就可以了

// 解法一:
// 这一种虽然可以实现,但是在n过大的时候就会出现时间复杂度过大的问题
function removeNb1 (n) {
  for (var i = 1; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if ((n+1)*n/2 - i - j === i * j) {
          return [[i,j],[j,i]]
      }
    }
  }
  return []
}
console.log(`removeNb1`, removeNb1(26))

// 解法二
// 单层循环就避免出现时间复杂度过大的问题
function removeNb2 (n) {
  // let sum = (n+1)*n/2 - i - j
  // i * j = (n+1)*n/2 - i - j
  // i * j + j = (n+1)*n/2 - i
  // j * (i+1) = (n+1)*n/2 - i
  // j = ((n+1)*n/2 - i)/ (i+1)
  let result = []
  for (var i = 1; i < n; i++) {
    const j  = ((n+1)*n/2 - i)/ (i+1)
    if (j%1 ===0 && j < n ) {
      result.push([i,j])
    }
  }
  return result
}
console.log(`removeNb2`, removeNb2(26))