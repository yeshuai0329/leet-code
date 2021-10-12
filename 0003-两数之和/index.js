// >    给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// - 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// - 你可以按任意顺序返回答案。

// 示例3:
// ```JavaScript
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// ```
const nums = [2,7,11,15]

// 方法一:
const targetSum1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++ ) {
    for (let j = i+1; j < nums.length; j++ ) {
        if (nums[i] + nums[j] === target) {
            return [i, j]
        }
    }
  }
}
console.log("🚀 ~ targetSum1", targetSum1(nums, 9))

// 方法二: 
const targetSum2 = (nums, target) => {
  for (let i = 0; i < nums.length; i++ ) {
    const sub = target - nums[i]
    if (nums.find(item => item === sub) && sub !== nums[i]) {
      return [i, nums.findIndex(item => item === sub)]
    }
  }
}
console.log("🚀 ~ targetSum2", targetSum2(nums, 9))

