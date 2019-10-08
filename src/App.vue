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
    if(process.env.VUE_APP_CURRENTMODE === 'dev') {
      this.$store.commit('updateSate', true)
    }else {
      console.log('ppp')
      this.$store.commit('updateSate', false)
    }
  }
}
</script>

<style lang="scss">

</style>
