<!-- 
@brief プロフィールのコンポーネント
@detail 名前、所属、外部メディアの情報を表示する 
-->
<template>
  <div class="px-5 text-left xl:text-2xl">
    <div class="text-gray-400 text-sm xl:text-lg font-extrabold">
      名前
    </div>
    <div>
      佐藤太心・
      <span class="text-xs xl:text-sm font-extrabold mx-1 px-2 py-1 text-TatoLightGreen border-2 rounded-full">
        ハンドルネーム
      </span>
      たと
    </div>
    <div class="text-xs xl:text-base font-normal text-gray-400">
      さとうたいしん
    </div>
    <div class="mt-5 xl:mt-10"></div>
    <div class="text-gray-400 text-sm xl:text-lg font-extrabold">
      所属
    </div>
    <div>
      東京理科大学 創域理工学研究科 情報計算科学専攻 <br> 松澤研究室 修士1年
    </div>
    <div class="mt-5 xl:mt-10"></div>
    <div class="text-gray-400 text-sm xl:text-lg font-extrabold">
      外部メディア
    </div>
    <div class="mt-2"></div>
    <div>
      <a href="https://github.com/otTATto" 
        class="text-sm xl:text-lg font-extrabold mx-1 px-2 py-1 border-2 border-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition duration-400 ease-in-out" 
        target="_blank" 
        rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'github']" />
        otTATto
      </a>
      <a href="https://x.com/0123tato" 
        class="text-sm xl:text-lg font-extrabold mx-1 px-2 py-1 border-2 border-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition duration-400 ease-in-out" 
        target="_blank" 
        rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'x-twitter']" />
        0123tato
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'ProfileComp'
  })
</script>

<style>

</style>