<template>
  <div>
    <van-pagination
      v-model="currentPage"
      :total-items="totalPage"
      @change="changePage"
      :items-per-page="showNumber">
    </van-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data () {
    return {
      currentPage: 1,
      totalPage: 50,
      showNumber: 10
    }
  },
  methods: {
    changePage () {
      var page = {
        currentPage: this.currentPage,
        totalPage: this.totalPage,
        showNumber: this.showNumber
      }
      this.$emit('page', page)
    }
  }
}
</script>

<style scoped>

</style>
