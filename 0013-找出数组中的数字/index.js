// 您将得到一个包含整数的数组（其长度至少为3，但可能非常大）。数组要么完全由奇数整数组成，
// 要么完全由偶数整数组成，但单个整数N除外。请编写一个方法，将数组作为参数并返回此“异常值”N。

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// 思路分析
// 需求就是在数组中挑出基数和偶数
// 所以利用filter 过滤数组分奇偶数组
// 那个数组长度最短,就返回哪个值
// 解法一
const findOutlier1 = (integers) => {
  const evenArr = integers.filter(item => item % 2)
  const oddArr = integers.filter(item => !(item % 2))
  return evenArr.length === 1 ? evenArr[0]: oddArr[0]
}

console.log(`findOutlier1`, findOutlier1([2, 4, 0, 100, 4, 11, 2602, 36]))
