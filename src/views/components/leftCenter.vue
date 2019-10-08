<template>
  <div class="left_center_box">
    leftCenter
    <p>{{this.$store.state.count}}</p>
  </div>
</template>

<script>
export default {
  name: 'leftCenter',
  mounted() {
    console.log(this.$store.state)
  }
}
</script>

<style lang="scss">
  .left_center_box {
    width: 100px;
    height: 100px;
    border: 1px solid #f00;
  }
</style>
