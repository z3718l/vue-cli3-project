<template>
  <div>
    left_top
    <button @click="clickStore()">点击改变store</button>
    <button @click="clickAction()">点击改变store2</button>
    <p>{{$store.state.count}}</p>
    <LeftChild></LeftChild>
  </div>
</template>
<script>
import LeftChild from '@/components/leftChild.vue'
export default {
  name: 'LeftTop',
  components: {
    LeftChild
  },
  inject: ['foo'],
  created() {
    console.log(`leftTop：${this.foo}`)
  },
  methods: {
    clickStore() {
      console.log('点击')
      this.$store.commit('increment')
    },
    clickAction() {
      this.$store.dispatch('actionsAddCount')
    }
  },
  mounted() {
    console.log(this.$store.state.isDev)
  }
}
</script>