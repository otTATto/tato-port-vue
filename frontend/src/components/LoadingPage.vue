<!-- 
@brief ローディング画面のコンポーネント
@detail ローディングのアニメーションは AE で作成した .gif 
-->
<template>
  <div class="loading-page flex items-center justify-center bg-zinc-800 text-white h-dvh">
    <img src="../img/loading/tato-logo-anime.gif" alt="Loading" class="w-20" />
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'LoadingPage'
  })
</script>

<style scoped>
  .loading-page {
    animation: fadeOut 3s ease-out forwards;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
</style>