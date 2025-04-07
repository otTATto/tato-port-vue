<template>
  <div>
    <!-- ロゴ -->
    <img src="../img/icon/tato_text.webp" alt="Tato Logo" class="ml-1 -mb-4 w-13" />
    <!-- ナビ -->
    <nav class="flex justify-end mr-2">
      <ul class="flex space-x-2 text-gray-300">
        <li v-if="isActiveRoute('home')">
          <div class="text-TatoGreen">
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
          <div class="text-TatoGreen">
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
          <div class="text-TatoGreen">
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
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

// @brief ルートの名前を取得し、引数と一致するかどうかを判定する
// @param name: ルートの名前
// @return true/false
const isActiveRoute = (name: string): boolean => {
  console.log(route.name)
  return route.name === name
}

defineOptions({
  name: 'HeaderComp'
})
</script>

<style>

</style>