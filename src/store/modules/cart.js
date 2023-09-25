import { getCartList, changeCount, delSelect } from '@/api/cart'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList (state, list) {
      state.cartList = list
    },
    toggleCheck (state, id) {
      const goods = state.cartList.find(item => item.goods_id === id)
      goods.isChecked = !goods.isChecked
    },
    toggleAllCheck (state, flag) {
      state.cartList.forEach(item => {
        item.isChecked = flag
      })
    },
    changeCount (state, { goodsId, goodsNum }) {
      const obj = state.cartList.find(item => item.goods_id === goodsId)
      obj.goods_num = goodsNum
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', data.list)
    },
    async changeCountAction (context, obj) {
      const { goodsId, goodsNum, goodsSkuId } = obj
      context.commit('changeCount', { goodsId, goodsNum })
      await changeCount(goodsId, goodsNum, goodsSkuId)
    },
    async delSelectAction (context) {
      const selCartList = context.getters.selCartList
      const cartIds = selCartList.map(item => {
        return item.id
      })
      await delSelect(cartIds)
      Toast.success('删除成功')
      context.dispatch('getCartAction')
    }
  },
  getters: {
    cartTotal (state) {
      return state.cartList.reduce((total, item) => total + item.goods_num, 0)
    },
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    selCount (state, getters) {
      return getters.selCartList.reduce((total, item) => total + item.goods_num, 0)
    },
    selPrice (state, getters) {
      return getters.selCartList.reduce((total, item) => total + item.goods_num * item.goods.goods_price_min, 0).toFixed(2)
    },
    isAllChecked (state, getters) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}
