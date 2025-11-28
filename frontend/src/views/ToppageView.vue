<template>
  <div class="flex items-center justify-center h-full">

    <!-- iOS 向けのギャラリー -->

      <!-- 中央のモットー -->
      <img src="../img/motto/motto.webp" 
        v-if="isWebKit"
        alt="Motto" 
        :class="['w-[88vw] md:w-[70vw] xl:w-[50vw]', isShrunk ? 'shrink-animation' : '']"
        v-prevent-image-actions  
      />

      <!-- 上部ギャラリー -->
      <div 
        v-if="isWebKit"
        class="scroll-infinity absolute top-[13dvh] w-full overflow-hidden gallery-fade-in">
        <div class="mask-x-from-75% mask-x-to-95% scroll-infinity__wrap gallery-row">
          <ul class="scroll-infinity__list scroll-infinity__list--right">
            <li v-for="(img, i) in topImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
          <ul class="scroll-infinity__list scroll-infinity__list--right">
            <li v-for="(img, i) in topImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
          <ul class="scroll-infinity__list scroll-infinity__list--right">
            <li v-for="(img, i) in topImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
        </div>
      </div>

      <!-- 下部ギャラリー -->
      <div 
        v-if="isWebKit"
        class="scroll-infinity absolute top-[63dvh] w-full overflow-hidden gallery-fade-in">
        <div class="mask-x-from-75% mask-x-to-95% scroll-infinity__wrap gallery-row">
          <ul class="scroll-infinity__list scroll-infinity__list--left">
            <li v-for="(img, i) in bottomImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
          <ul class="scroll-infinity__list scroll-infinity__list--left">
            <li v-for="(img, i) in bottomImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
          <ul class="scroll-infinity__list scroll-infinity__list--left">
            <li v-for="(img, i) in bottomImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
        </div>
      </div>

    <!-- ここまで iOS 向けのギャラリー -->

    <!-- iOS 以外の通常のギャラリー -->

      <!-- 中央のモットー -->
      <img src="../img/motto/motto.webp" 
        v-if="!isWebKit"
        alt="Motto" 
        :class="['w-[88vw] md:w-[70vw] xl:w-[50vw]', isShrunk ? 'shrink-animation' : '']"  
        v-prevent-image-actions
      />

      <!-- 上部ギャラリー -->
      <div 
        v-if="!isWebKit"
        class="scroll-infinity absolute top-10 w-full overflow-hidden gallery-fade-in">
        <div class="scroll-infinity__wrap gallery-row">
          <ul class="scroll-infinity__list scroll-infinity__list--right">
            <li v-for="(img, i) in topImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
          <ul class="scroll-infinity__list scroll-infinity__list--right">
            <li v-for="(img, i) in topImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
          <ul class="scroll-infinity__list scroll-infinity__list--right">
            <li v-for="(img, i) in topImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
        </div>
      </div>

      <!-- 下部ギャラリー -->
      <div
        v-if="!isWebKit" 
        class="scroll-infinity absolute bottom-10 w-full overflow-hidden gallery-fade-in">
        <div class="scroll-infinity__wrap gallery-row">
          <ul class="scroll-infinity__list scroll-infinity__list--left">
            <li v-for="(img, i) in bottomImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
          <ul class="scroll-infinity__list scroll-infinity__list--left">
            <li v-for="(img, i) in bottomImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
          <ul class="scroll-infinity__list scroll-infinity__list--left">
            <li v-for="(img, i) in bottomImages" :key="`top-${i}`" class="scroll-infinity__item mx-2">
              <img :src="img.src" alt="Gallery Image"
                class="rounded-lg cursor-pointer" v-prevent-image-actions
                @click="router.push(`/works/#${img.id}`)"
              />
            </li>
          </ul>
        </div>
      </div>

    <!-- ここまで iOS 以外の通常のギャラリー -->

  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter();

  // @brief ギャラリー画像のインポート
  import topImage1 from '@/img/gallery/top/image1.webp'
  import topImage2 from '@/img/gallery/top/image2.webp'
  import topImage3 from '@/img/gallery/top/image3.webp'
  import topImage4 from '@/img/gallery/top/image4.webp'

  const topImages = [
    {
      src: topImage1, 
      id: 'idol',
    },
    {
      src: topImage2, 
      id: 'toneunga-bp',
    },
    {
      src: topImage3, 
      id: 'chal7777',
    },
    {
      src: topImage4, 
      id: 'mizbe',
    },
  ]

  import bottomImage1 from '@/img/gallery/bottom/image1.webp'
  import bottomImage2 from '@/img/gallery/bottom/image2.webp'
  import bottomImage3 from '@/img/gallery/bottom/image3.webp'
  import bottomImage4 from '@/img/gallery/bottom/image4.webp'

  const bottomImages = [
    {
      src: bottomImage1, 
      id: 'toneunga-bp',
    },
    {
      src: bottomImage2, 
      id: 'toneunga-bp',
    },
    {
      src: bottomImage3, 
      id: 'font-guessr',
    },
    {
      src: bottomImage4, 
      id: 'project-asg',
    },
  ]

  // === ここから: WebKit ベース向けの処理 ===

  // @brief WebKit ベースかどうかの判定フラグ
  const isWebKit = ref<boolean>(false)

  // === ここまで: WebKit ベース向けの処理 ===

  // @brief モットーの縮小状態
  const isShrunk = ref<boolean>(false)

  // @brief ギャラリー表示の状態管理
  const showGallery = ref<boolean>(false)

  onMounted(() => {
    // === ここから: WebKit ベース向けの処理 ===

    // @brief iOS, iPad OS, iPod OS かどうか、および Safari ブラウザかどうかの判定
    const ua = navigator.userAgent
    // @brief iOS, iPad OS, iPod OS かどうかの判定フラグ
    const isIOS = /iPhone|iPad|iPod/i.test(ua)
    // @brief Safari かどうかを判定
    const isSafari: boolean = /Safari/.test(ua) 
                           && !/Chrome/.test(ua) 
                           && !/CriOS/.test(ua)
                           && !/FxiOS/.test(ua)
    // @brief WebKit ベースかどうかを判定
    isWebKit.value = isIOS || isSafari
    // @brief デバッグ用出力
    console.log('===== WebKit base or not =====')
    console.log('User Agent:', ua)
    console.log('isIOS:', isIOS)
    console.log('isSafari:', isSafari)
    console.log('isWebKit:', isWebKit.value)
    console.log('==============================')

    // === ここまで: WebKit ベース向けの処理 ===

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
    width: 30dvh;
    transition: width 0.7s ease-in-out;
  }

  /* ギャラリー画像のCSS */
  .gallery-row {
    overflow: hidden;
    position: relative;
  }
  img {
    display: block;
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
    width: 30dvh;
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