<!--  
@brief WorkdetailVue 専用のヘッダーのコンポーネント  
@detail 左上に Works へ戻るボタンを表示
@detail 右上にナビゲーションを表示
-->
<template>
  <div>
    <div class="flex items-center justify-between mb-2">
    <!-- ロゴ -->
    <img src="../img/icon/tato_text.webp" alt="Tato Logo" class="ml-1 w-13" />
    <!-- ナビ -->
    <nav class="flex justify-end mr-2 mb-1">
      <ul class="flex space-x-2 text-gray-300">
        <li>
          <router-link to="/" class="text-gray-400 hover:text-red-400 transition duration-400 ease-in-out">
            <span class="text-xs mr-1">. . /</span>Top
          </router-link>
        </li>
        <li>/</li>
        <li>
          <router-link to="/works/" class="text-gray-400 hover:text-red-400 transition duration-400 ease-in-out">
            <span class="text-xs mr-1">. . /</span>Works
          </router-link>
        </li>
        <li>/</li>
        <li>
          <router-link to="/about-me/" class="text-gray-400 hover:text-red-400 transition duration-400 ease-in-out">
            <span class="text-xs mr-1">. . /</span>About Me
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'HeaderForWdComp'
  })
</script>

<style>

</style>