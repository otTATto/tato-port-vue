<template>
  <div>
    <HeaderComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script setup lang="ts"> 
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'

defineOptions({
  name: 'App',
  components: {
    HeaderComp, 
    FooterComp,
  }
})
</script>

<style scoped>

</style>