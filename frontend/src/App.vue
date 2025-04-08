<template>
  <div>
    <LoadingPage v-if="showLoading" />
    <div v-else class="fade-in-with-blur m-4">
      <HeaderComp />
      <div :class="[
        'rounded-lg border-2 border-TatoGreen',
        isHome ? 'h-[91vh] bg-linear-35 from-emerald-50 to-red-50' 
               : ''
      ]">
        <transition class="fade-in-with-blur">
          <router-view />
        </transition>
      </div>
      <FooterComp />
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
import LoadingPage from './components/LoadingPage.vue'

// @brief 現在のルートを取得
const route = useRoute()

// @brief '/' にいるかどうかを判定
const isHome = computed(() => route.path === '/')

// @brief ローディング画面を表示するかどうかのフラグ
const showLoading = ref(true)

// @brief '/' にアクセスしたときにローディング画面を表示する
// @detail 3秒後にローディング画面を非表示にする
onMounted(() => {
  if (isHome) {
    setTimeout(() => {
      showLoading.value = false
    }, 3000)
  } else {
    showLoading.value = false
  }
})

defineOptions({
  name: 'App',
  components: {
    HeaderComp, 
    FooterComp,
    LoadingPage,
  }
})
</script>

<style scoped>
/*
  @brief: ローディング画面終了後、メイン要素をガウスぼかしと伴にフェードインさせる
*/
.fade-in-with-blur {
  opacity: 0;
  filter: blur(10px);
  animation: fadeInBlur 1s ease-out forwards;
}

@keyframes fadeInBlur {
  0% {
    opacity: 0;
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>