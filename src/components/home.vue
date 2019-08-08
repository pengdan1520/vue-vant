<template>
  <div class="hello ignore">
    <md-button type="default">按钮</md-button>
    <h1>{{counts}}</h1>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
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
    onRefresh () {
      this.$router.replace('/refresh')
    },
    add () {
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

<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  li{
    display: inline-block;
    margin: 0 10px;
  }
}
a {
  color: #42b983;
}
</style>
