import request from '@/utils/request'

export const getProList = (paramsObj) => {
  const { categoryId, goodsName, page } = paramsObj
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}

export const getProDetail = (id) => {
  return request.get('/goods/detail', {
    params: {
      id
    }
  })
}
