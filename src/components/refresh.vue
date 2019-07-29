<template>
  <div>
    <router-link to="/">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
      ></van-nav-bar>
    </router-link>
    第二个页面
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"></van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" text="购物车"></van-goods-action-icon>
      <van-goods-action-button type="warning" text="加入购物车"></van-goods-action-button>
      <van-goods-action-button type="danger" text="立即购买"></van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: 'refresh',
  data () {
    return {
      msg: '来自子组件！'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
