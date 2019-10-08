<template>
  <div>
    首页
    <LeftTop></LeftTop>
    <LeftCenter></LeftCenter>
  </div>
</template>
<script>
import LeftTop from '@/views/components/leftTop.vue'
import LeftCenter from '@/views/components/leftCenter.vue'
export default {
  name: 'index',
  components: {
    LeftTop,
    LeftCenter
  },
  provide: {
    foo: 'bar'
  }
}
</script>
