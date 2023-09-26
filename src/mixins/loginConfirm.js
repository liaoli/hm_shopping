export default {
  methods: {
    // 判断是否需要登录
    // 1、需要，返回true,并直接弹出登录确认框
    // 2、不需要,返回false
    loginConfirm () {
      if (!this.$store.getters['user/token']) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '需要登录才能进行此操作',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        }).then(() => {
          this.$router.replace({
            path: '/login',
            query: {
              backUrl: this.$route.fullPath
            }
          })
        }).catch(() => {})
        return true
      }
      return false
    }
  }
}
