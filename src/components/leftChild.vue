<template>
  <div>
    left_child
  </div>
</template>
<script>
export default {
  name: 'LeftChild',
  components: {},
  inject: ['foo'],
  created() {
    console.log(`leftChild：${this.foo}`)
  }
}
</script>
