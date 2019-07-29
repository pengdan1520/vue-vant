<template>
  <div class="hello">
    <router-link to='refresh'>
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
      ></van-nav-bar>
    </router-link>
    <van-card
      v-model='counts'
      :num="counts"
      :price="counts"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"></van-card>
    <child @func="getMsgFormSon" :toSon="parentMsg"></child>
    <van-button plain type="primary">{{msg || '等待信息'}}</van-button>
    <pagination @page="getPage"></pagination>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="add"></van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="reduce"></van-goods-action-icon>
      <van-goods-action-button type="warning" text="加入购物车" @click="add1000"></van-goods-action-button>
      <van-goods-action-button type="danger" text="立即购买" @click="reduce1000"></van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import child from './child'
import pagination from './pagination'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  components: {
    child,
    pagination
  },
  data () {
    return {
      parentMsg: 'come for parent',
      update: 0,
      msg: '',
      number: this.$store.state.count
    }
  },
  computed: {
    ...mapState({
      counts: (state) => state.count
    }),
    ...mapGetters({
      getternum: 'docount'
    })
  },
  methods: {
    ...mapMutations({
      addnum: 'SET_COUMT_ADD',
      reducenum: 'SET_COUMT_REDUCE'
    }),
    ...mapActions({
      addmore: 'ADD1000',
      reducemore: 'REdUCE1000'
    }),
    getPage (page) {
      console.log('come for page:', page)
    },
    getMsgFormSon (data) {
      this.msg = data
    },
    onRefresh () {
      this.$router.replace('/refresh')
    },
    add () {
      this.update++
      this.addnum()
      console.log(this.counts, '+1')
    },
    reduce () {
      this.reducenum()
      console.log(this.counts, '-1')
    },
    add1000 () {
      this.addmore()
      console.log(this.counts, '+1000')
    },
    reduce1000 () {
      this.reducemore()
      console.log(this.counts, '-1000')
    }
  }
}
</script>

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
