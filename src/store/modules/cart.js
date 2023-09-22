import { getCartList } from '@/api/cart'

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
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      context.commit('setCartList', data.list)
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
      return getters.selCartList.reduce((total, item) => total + item.goods_num * item.goods_price_min, 0).toFixed(2)
    }
  }
}
