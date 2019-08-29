<template>
  <div>
    left_top
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
  }
}
</script>