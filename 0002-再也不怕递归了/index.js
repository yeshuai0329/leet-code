// 1. 在树状结构中查询id为某个值的节点（深度优先）
const findInTree = (tree, id) => {
  if (!tree || !tree.length) {
    return null
  }
  for (const node of tree) {
    if (node.id === id) {
      return node
    }
    const find = findInTree(node.children, id)
    if (find) {
      return find
    }
  }
  return null
}

// 2. 在树状结构中查询id为某个值的节点（广度优先）
const findInTree = (tree, id) => {
  if (!tree || !tree.length) {
    return null
  }
  for (const node of tree) {
    if (node.id === id) {
      return node
    }
  }
  const childrens = tree.reduce((total, current) => {
    return total.concat(current.children || [])
  },[])
  return findInTree(childrens, id)
}

// 3. 把树形结构打平为一级
const flatten = tree => {
  let list = []
  tree.forEach(node => {
    const {children, ...obj} = node
    list.push(obj)
    if (children && children.length) {
      const childrenList = flatten(children)
      list.push(...childrenList)
    }
  })
  return list
}

const flatten = tree => {
  return (tree || []).reduce((total, current) => {
    const { children, ...obj } = current
    return total.concat(obj, flatten(children))
  }, [])
}

// 4. 根据id 返回所有的父级id
const findAllFather = (tree, id, parentIds = []) => {
  if (!tree || !tree.length) {
    return null
  }
  for (const node of tree) {
    if (node.id === id) {
      return parentIds
    }
    const find = findAllFather(node.children, id, [...parentIds, node.id])
    if (find) {
      return find
    }
  }
  return null
}

// 5. 根据id 返回所有的父级id以及自己id
const findAllFather = (tree, id, parentIds = []) => {
  if (!tree || !tree.length) {
    return null
  }
  for (const node of tree) {
    if (node.id === id) {
      return parentIds
    }
    const find = findAllFather(node.children, id, [...parentIds, node.id])
    if (find) {
      return [...find, id]
    }
  }
  return null
}

// 6. 过滤出树形结构中符合条件的节点
const filterTrueNode = tree => {
  return (tree || [])
    .filter(node => node.auth)
  	.map(node => {
    		const { children } = node
        return {
          ...node,
          children: filterTrueNode(children)
        }
  	})
}
