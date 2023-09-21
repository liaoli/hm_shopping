const INFO_KEY = 'user_info'
// 获取用户信息
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)

  if (result) {
    return JSON.parse(result)
  }
  return {
    token: '',
    userId: ''
  }
}

// 设置用户信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

// 删除用户信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
