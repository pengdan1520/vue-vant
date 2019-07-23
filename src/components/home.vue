<template>
  <div class="hello">
    <h1>{{this.$store.state.count}}</h1>
    <div>
      <h3>我没网了1</h3>
      <div @click="onRefresh">刷新</div>
    </div>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"></van-card>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon"></van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon"></van-goods-action-icon>
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton"></van-goods-action-button>
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton"></van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      number: this.$store.state.count
    }
  },
  computed: {
  },
  methods: {
    onRefresh () {
      this.$router.replace('/refresh')
    },
    onClickIcon () {
      this.$store.commit('addNumber')
      console.log(111111, this.$store.state)
    },
    onClickButton () {
      this.$store.commit('ruffNumber')
      console.log(2222222, this.$store.state)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
