<template>
  <div class="hello ignore">
    <div class="md-example-child md-example-child-notice-bar md-example-child-notice-bar-6">
      <md-notice-bar
        icon="volumn"
        type="warning"
        scrollable
      >
        为了确保您的资金安全，请设置支付密码为了确保您的资金安全，请设置支付密码为了确保您的资金安全，请设置支付密码
      </md-notice-bar>
    </div>
    <h1>{{counts}}</h1>
    <md-button type="primary" @click="add()" round>按钮</md-button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      number: this.$store.state.count
    };
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
      this.$router.replace('/refresh');
    },
    add () {
      this.addmore();
      this.$api.article.reqDemo().then(res => {
        console.log(res, 'res');
      });
    },
    reduce () {
      this.reducenum();
      console.log(this.counts, '-1');
    },
    add1000 () {
      this.addmore();
      console.log(this.counts, '+1000');
    },
    reduce1000 () {
      this.reducemore();
      console.log(this.counts, '-1000');
    }
  }
};
</script>

<style lang="scss" scoped>
.font-style{
 font-size:24px;
}
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
