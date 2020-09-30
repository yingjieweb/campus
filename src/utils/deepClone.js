function deepClone(target) {
  //检测输入数据是数组还是对象
  let result = Array.isArray(target) ? [] : {}

  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      if (target[key] && typeof target[key] === 'object') {
        //若当前元素类型为对象时，递归调用
        result[key] = deepClone(target[key])

        //若当前元素类型为基本数据类型
      } else {
        result[key] = target[key]
      }
    }
  }
  return result
}

export {deepClone}
