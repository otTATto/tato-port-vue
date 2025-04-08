<template>
  <div class="my-5">
    <div class="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-6">
      <div class="col-span-4 md:col-span-1 lg:col-span-2">
        <img src="../img/icon/tato-comet.webp" alt="Logo"/>
      </div>
      <div class="hidden lg:block lg:col-span-1"></div>
      <div class="hidden md:flex md:items-center col-span-1 md:col-span-1 lg:col-span-3">
        <ProfileComp/>
      </div>
    </div>
    <!-- スマホ向けプロフィール -->
    <div class="md:hidden my-10 items-center flex justify-center">
      <ProfileComp/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileComp from '../components/ProfileComp.vue'

defineOptions({
  name: 'AboutMe',
  components: {
    ProfileComp,
  }
})
</script>

<style>

</style>