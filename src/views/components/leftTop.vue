<template>
  <div>
    left_top
    <button @click="clickStore()">点击改变store</button>
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
    }
  }
}
</script>