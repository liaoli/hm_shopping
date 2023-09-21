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

const HISTORY_KEY = 'search_history_list'
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}
// 设置历史记录
export const setHistoryList = (list) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(list))
}
