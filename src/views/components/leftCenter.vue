<template>
  <div class="left_center_box">
    leftCenter
    <p>{{this.$store.state.count}}</p>
    <p>{{this.isDev}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'leftCenter',
  mounted() {
    console.log(this.isDev)
  },
  computed: {
    ...mapState([
      'isDev'
    ])
  }
}
</script>

<style lang="scss">
  .left_center_box {
    width: 10rem;
    height: 10rem;
    border: 1px solid #f00;
  }
</style>
