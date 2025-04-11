<template>
  <!-- 上部へ戻るボタン -->
  <teleport to="body">
    <div class="fixed bottom-5 right-5 z-50">
      <button 
        ref="scrollToTopButton"
        class="hidden button w-18 h-18 bg-white/80 backdrop-blur shadow-lg text-TatoGreen hover:text-red-400 transition duration-400 ease-in-out cursor-pointer font-bold rounded-full fixed-button'"
        @click="scrollToTop">
        <font-awesome-icon :icon="['fas', 'angle-up']" class="text-xl" />
      </button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';

  defineOptions({
    name: 'TotopbuttonComp'
  })

  // ボタンの参照を取得
  const scrollToTopButton = ref<HTMLElement | null>(null);

  // スクロール位置を監視するための変数
  const scrollPosition = ref(0);

  // スクロールイベントのハンドラ
  const updateScrollPosition = () => {
    scrollPosition.value = window.scrollY;
    if (scrollToTopButton.value) {
      if (scrollPosition.value > 50) {
        scrollToTopButton.value.classList.add('fade-in-with-blur');
        scrollToTopButton.value.classList.remove('fade-out-with-blur');
        scrollToTopButton.value.classList.remove('hidden');
      } else {
        scrollToTopButton.value.classList.add('fade-out-with-blur');
        scrollToTopButton.value.classList.remove('fade-in-with-blur');
      }
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', updateScrollPosition);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollPosition);
  });

  // @brief 上部へ戻るボタンをクリックしたときの処理
  // @detail スクロール位置を0に設定する
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
</script>

<style scoped>
  .fade-in-with-blur {
    opacity: 0;
    filter: blur(10px);
    animation: fadeInBlur 0.5s ease-out forwards;
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

  .fade-out-with-blur {
    opacity: 1;
    filter: blur(0);
    animation: fadeOutBlur 0.5s ease-out forwards;
  }
  @keyframes fadeOutBlur {
    0% {
      opacity: 1;
      filter: blur(0);
    }
    100% {
      opacity: 0;
      filter: blur(10px);
    }
  }
</style>