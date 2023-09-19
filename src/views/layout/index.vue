<template>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="apps-o">分类页</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item icon="user-o">我的</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
</style>
