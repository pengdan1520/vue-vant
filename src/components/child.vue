<template>
  <div class="app">
    <van-button plain type="primary" @click="sendMsg">给父组件传递值</van-button>
    <van-button plain type="primary" @click="getParent">调用父组件的方法</van-button>
    <van-button plain type="primary">{{toSon}}</van-button>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      msg: '来自子组件！'
    }
  },
  computed: {

  },
  props: {
    toSon: String
  },
  methods: {
    getParent () {
      console.log('调用父组件方法')
      this.$parent.add()
    },
    sendMsg () {
      // func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
      this.$emit('func', this.msg)
    }
  }
}
</script>

<style scoped>

</style>
