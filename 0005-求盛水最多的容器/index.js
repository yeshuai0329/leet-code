// > 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 示例1:
// ```JavaScript
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
// ```
const height = [1,8,6,2,5,4,8,3,7]

const maxArea = function(height) {
  // 先假设最大蓄水量为 0
  let maxWater = 0
  // 第一次循环取值
  for (var i =0 ; i < height.length; i++ ) {
    // 第二次循环取值
    for (var j = i+1 ; j < height.length; j++ ) {
      let minNum = 0
      //因为是盛水,所以要根据短边来决定能盛多少水 
      if (height[i] - height[j] >= 0) {
        minNum = height[j]
      } else {
        minNum = height[i]
      }
      // 每次的水量相比较
      const water = minNum * (j-i)
      // 如果本次盛水量和上一个最大盛水量相比较,取最大值
      if (water - maxWater >= 0) {
        maxWater = water
      }
    }    
  }
  return maxWater
};
console.log("🚀  ~ maxArea", maxArea(height))
