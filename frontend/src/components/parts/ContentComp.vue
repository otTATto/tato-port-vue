<!-- 
@brief 作品詳細ページのコンテンツ部分
@param content: 表示するコンテンツ
@detail WebKit ベースだとドロップキャップが上手く機能しないため、WebKit ベースでない場合のみ適応させる
-->
<template>
  <div>
    <p 
      :class="['font-MaruGothic font-normal text-neutral-700 my-1', isWebKit ? '' : 'drop-cap']">
      {{ content }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  defineOptions({
    name: 'ContentComp'
  })

  defineProps({
    content: {
      type: String,
      required: true
    }
  });
  
  // === ここから: WebKit ベース向けの処理 ===

  // @brief WebKit ベースかどうかの判定フラグ
  const isWebKit = ref<boolean>(false)

  onMounted(() => {
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
  })

  // === ここまで: WebKit ベース向けの処理 ===
</script>

<style>
  .drop-cap::first-letter {
    initial-letter: 1.5 2;
    margin: 6px 4px 0px;
    color: #769586;
    font-weight: 800;
  }
</style>