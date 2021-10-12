// 树装数组
const treeData = [
  {
    id: 1,
    name: 'xx',
    children:[
      {
        id: 11,
        name: '1xx',
        children: [
          {
            id: 111,
            name: '11xx'
          }
        ]
      },
      {
        id: 12,
        name: '12x'
      }
    ]
  }
]

// 转换的目标数组
const toTreeData =  {
  1: {
    name: 'xx',
    children: [11,22]
  },
  11: {
    name: '1xx',
    children: [111],
    parent: 1
  },
  12: {
    name: '1xx',
    parent: 1
  },
  111: {
    name: '11xx',
    parentId: 11
  }

  // ...
}

/**
 * @description: 处理树状数组,转换为目标结构
 * @param {tree} 要处理的树装数组
 * @param {parentId} 要处理的树装数组
 * @return {flatTree} 转换后的对象
 */
const dataToMap = (tree = [], parentId) => {
  let flatTree = {}
  tree.forEach(ele => {
    const { id, name, children } = ele
    flatTree[id] = { name }
    // 查找同级子元素id
    if (children && children.length) {
      flatTree[id].children = children.map(item => item.id)
    }
    // 查找父级元素
    if (parentId) {
      flatTree[id].parentId = parentId
    }
    // 遍历出所有元素
    if (children && children.length) {
      const obj =  dataToMap(children, id)
      flatTree = {...flatTree, ...obj}
    }
  })
  return flatTree
}