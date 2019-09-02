<template>
  <div id="app">
    <div class="app-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  created() {
    console.log('当前环境：', process.env)
  }
}
</script>

<style lang="scss">

</style>
