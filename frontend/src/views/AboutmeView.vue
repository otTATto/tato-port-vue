<template>
  <div class="my-5">
    <div class="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-6">
      <div class="col-span-4 md:col-span-1 lg:col-span-2">
        <img src="../img/icon/tato-comet.webp" alt="Logo"/>
      </div>
      <div class="hidden lg:block lg:col-span-1"></div>
      <div class="hidden md:flex md:items-center col-span-1 md:col-span-1 lg:col-span-3">
        <div class="px-5 text-left">
          <div class="text-gray-400 text-sm font-extrabold">
            名前
          </div>
          <div>
            佐藤太心・<span class="text-xs font-extrabold mx-1 px-2 py-1 text-TatoLightGreen border-2 rounded-full">ハンドルネーム</span>たと
          </div>
          <div class="mt-5"></div>
          <div class="text-gray-400 text-sm font-extrabold">
            所属
          </div>
          <div>
            東京理科大学 創域理工学研究科 情報計算科学専攻 修士1年
          </div>

        </div>
      </div>
    </div>
      
      
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AboutMe'
})
</script>

<style>

</style>