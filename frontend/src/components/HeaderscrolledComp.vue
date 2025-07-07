<template>
    <!-- スクロール時に出現するヘッダー -->
    <teleport to="body">
      <div class="fixed top-5 right-5 z-50">
        <div 
          ref="scrolledHeader"
          class="hidden py-3 px-5 font-black bg-white/80 backdrop-blur shadow-lg rounded-full fixed-button'"
          @click="scrollToTop"
          @animationend="handleAnimationEnd">
          <nav class="flex justify-end mr-2 mb-1">
            <ul class="flex space-x-2 text-gray-300">
              <li v-if="isActiveRoute('home')">
                <div class="text-TatoGreen cursor-not-allowed">
                  Top
                </div>
              </li>
              <li v-else>
                <router-link to="/" class="text-gray-400 hover:text-red-400 transition duration-400 ease-in-out">
                  Top
                </router-link>
              </li>
              <li>/</li>
              <li v-if="isActiveRoute('works')">
                <div class="text-TatoGreen cursor-not-allowed">
                  Works
                </div>
              </li>
              <li v-else>
                <router-link to="/works/" class="text-gray-400 hover:text-red-400 transition duration-400 ease-in-out">
                  Works
                </router-link>
              </li>
              <li>/</li>
              <li v-if="isActiveRoute('about-me')">
                <div class="text-TatoGreen cursor-not-allowed">
                  About Me
                </div>
              </li>
              <li v-else>
                <router-link to="/about-me/" class="text-gray-400 hover:text-red-400 transition duration-400 ease-in-out">
                  About Me
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </teleport>
  </template>
  
<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useRoute } from 'vue-router'

  defineOptions({
    name: 'HeaderscrolledComp'
  })

  const route = useRoute()

  // @brief ルートの名前を取得し、引数と一致するかどうかを判定する
  // @param name: ルートの名前
  // @return true/false
  const isActiveRoute = (name: string): boolean => {
    return route.name === name
  }

  // ボタンの参照を取得
  const scrolledHeader = ref<HTMLElement | null>(null);

  // スクロール位置を監視するための変数
  const scrollPosition = ref(0);

  // フェードアウト完了後に display: none を適用
  const handleAnimationEnd = () => {
    if (scrolledHeader.value?.classList.contains('fade-out-with-blur')) {
      scrolledHeader.value.style.display = 'none';
    }
  };

  // スクロールイベントのハンドラ
  const updateScrollPosition = () => {
    scrollPosition.value = window.scrollY;
    if (scrolledHeader.value) {
      if (scrollPosition.value > 50) {
        scrolledHeader.value.style.display = 'block'; // 表示を有効化
        scrolledHeader.value.classList.add('fade-in-with-blur');
        scrolledHeader.value.classList.remove('fade-out-with-blur');
        scrolledHeader.value.classList.remove('hidden');
        scrolledHeader.value.style.pointerEvents = 'auto'; // 当たり判定を有効化
      } else {
        scrolledHeader.value.classList.add('fade-out-with-blur');
        scrolledHeader.value.classList.remove('fade-in-with-blur');
        scrolledHeader.value.style.pointerEvents = 'none'; // 当たり判定を無効化
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
    pointer-events: none; /* 初期状態で当たり判定を無効化 */
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
    pointer-events: none; /* 非表示時に当たり判定を無効化 */
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