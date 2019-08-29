<template>
  <div>
    首页
    <LeftTop></LeftTop>
  </div>
</template>
<script>
import LeftTop from '@/views/components/leftTop.vue'
export default {
  name: 'index',
  components: {
    LeftTop
  },
  provide: {
    foo: 'bar'
  }
}
</script>
