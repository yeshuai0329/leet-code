//  > 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
// 示例1: 
// ```JavaScript
// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// ```

// 示例2: 
// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

const nums1 = [1,3], nums2 = [2]

const findMedianSortedArrays = function(nums1, nums2) {
  const newArr = [...nums1, ...nums2].sort((a,b) => a-b)
  if (newArr.length === 0) {
      return 0
  }
  if (newArr.length % 2) {
      return newArr[Math.floor(newArr.length / 2)]
  } else {
      return (newArr[(newArr.length / 2) - 1] + newArr[(newArr.length / 2)]) / 2
  }
};
console.log("🚀 ~ findMedianSortedArrays", findMedianSortedArrays(nums1,nums2))
