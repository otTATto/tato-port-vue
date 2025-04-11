<template>
  <div class="flex items-center justify-center h-full">
    
    <!-- 中央のモットー -->
    <img src="../img/motto/motto.webp" 
      alt="Motto" 
      :class="['w-[88vw] md:w-[70vw] xl:w-[50vw]', isShrunk ? 'shrink-animation' : '']"  
    />

    <!-- 上部ギャラリー -->
    <div class="scroll-infinity absolute top-10 w-full overflow-hidden gallery-fade-in">
      <div class="scroll-infinity__wrap gallery-row">
        <ul class="scroll-infinity__list scroll-infinity__list--right">
          <li v-for="(img, i) in topImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
            <img :src="img" alt="Gallery Image"
              class="rounded-lg"
            />
          </li>
        </ul>
        <ul class="scroll-infinity__list scroll-infinity__list--right">
          <li v-for="(img, i) in topImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
            <img :src="img" alt="Gallery Image"
              class="rounded-lg"
            />
          </li>
        </ul>
        <ul class="scroll-infinity__list scroll-infinity__list--right">
          <li v-for="(img, i) in topImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
            <img :src="img" alt="Gallery Image"
              class="rounded-lg"
            />
          </li>
        </ul>
      </div>
    </div>

    <!-- 下部ギャラリー -->
    <div class="scroll-infinity absolute bottom-10 w-full overflow-hidden gallery-fade-in">
      <div class="scroll-infinity__wrap gallery-row">
        <ul class="scroll-infinity__list scroll-infinity__list--left">
          <li v-for="(img, i) in bottomImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
            <img :src="img" alt="Gallery Image"
              class="rounded-lg"
            />
          </li>
        </ul>
        <ul class="scroll-infinity__list scroll-infinity__list--left">
          <li v-for="(img, i) in bottomImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
            <img :src="img" alt="Gallery Image"
              class="rounded-lg"
            />
          </li>
        </ul>
        <ul class="scroll-infinity__list scroll-infinity__list--left">
          <li v-for="(img, i) in bottomImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
            <img :src="img" alt="Gallery Image"
              class="rounded-lg"
            />
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  // ギャラリー画像のインポート
  import topImage1 from '@/img/gallery/top/image1.webp'
  import topImage2 from '@/img/gallery/top/image2.webp'
  import topImage3 from '@/img/gallery/top/image3.webp'
  import topImage4 from '@/img/gallery/top/image4.webp'

  const topImages = [topImage1, topImage2, topImage3, topImage4]

  import bottomImage1 from '@/img/gallery/bottom/image1.webp'
  import bottomImage2 from '@/img/gallery/bottom/image2.webp'
  import bottomImage3 from '@/img/gallery/bottom/image3.webp'
  import bottomImage4 from '@/img/gallery/bottom/image4.webp'

  const bottomImages = [bottomImage1, bottomImage2, bottomImage3, bottomImage4]

  // モットーの縮小状態
  const isShrunk = ref(false)

  // ギャラリー表示の状態管理
  const showGallery = ref(false)

  onMounted(() => {
    // 2秒後にモットーを縮小する
    setTimeout(() => {
      isShrunk.value = true
    }, 2000) 
  })

  defineOptions({
    name: 'TopPage'
  })
</script>

<style scoped>
  /* モットーのアニメーション */
  .shrink-animation {
    width: 30vh;
    transition: width 0.7s ease-in-out;
  }

  /* ギャラリー画像のCSS */
  .gallery-row {
    overflow: hidden;
    position: relative;
  }
  img {
    display: block;
    vertical-align: middle;
  }

  /* ギャラリー専用のフェードインアニメーション */
  .gallery-fade-in {
    opacity: 0;
    filter: blur(10px);
    animation: fadeInBlur 3s ease-out forwards;
  }

  @keyframes fadeInBlur {
    0% {
      opacity: 0;
      filter: blur(10px);
    }
    75% {
      opacity: 0;
      filter: blur(10px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  /* 右から左へのアニメーション */
  @keyframes infinity-scroll-left {
    from {
      transform: translateX(0);
    }
      to {
      transform: translateX(-100%);
    }
  }
  .scroll-infinity__wrap {
    display: flex;
    overflow: hidden;
  }
  .scroll-infinity__list {
    display: flex;
    list-style: none;
    padding: 0
  }
  .scroll-infinity__list--left {
    animation: infinity-scroll-left 40s infinite linear 0.5s both;
  }
  .scroll-infinity__item {
    width: 30vh;
  }
  .scroll-infinity__item>img {
    width: 100%;
  }

  /* 左から右へのアニメーション */
  @keyframes infinity-scroll-right {
    from {
      transform: translateX(-100%);
    }
      to {
      transform: translateX(0%);
    }
  }
  .scroll-infinity__list--right{
    animation :infinity-scroll-right 40s infinite linear 0.5s both;
  }

</style>