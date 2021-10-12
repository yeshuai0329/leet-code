// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]

// 思路分析:
// 1. 如果目标数组是空,或者length小于等于2,那么return []
// 2. 观察示例一输入的结果是从小到大排序过的,所以可以先针对目标数组进行排序
// 3. 并且要求输出的结果中不可包含重复的三元数组,那么就是对数组进行去重,但是数组内的是复杂数据类型,如果去重可以利用JSON,转字符串比较去重.
const nums = [-1,0,1,2,-1,-4]

const threeNumsSum = (nums) => {
  // 如果目标数组length小于等于2,那么就返回空数组
  if (nums.length <= 2) {
    return []
  }
  // 给nums先进行排序以后再去根据条件判断
  const newNums = nums.sort((a, b) => a - b)
  let result = []
  for (var i = 0; i < newNums.length; i++) {
    for (var j = i + 1; j < newNums.length; j++) {
      for (var k = j + 1; k < newNums.length; k++) {
        if (newNums[i] + newNums[j] + newNums[k] === 0) {
          const temp = []
          temp.push(newNums[i],newNums[j],newNums[k])
          // 主要这里是判断一下目标result中是否已经包含重复数组了
          if (!result.includes(JSON.stringify(temp))) {
              result.push(JSON.stringify(temp))
          }
        }
      }
    }
  }
  return result.map(item => JSON.parse(item))
}

console.log('threeNumsSum',threeNumsSum(nums))
